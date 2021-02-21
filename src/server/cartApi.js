import http from "./httpConfig";
import config from "../config.json";

const updateCart = async (req) => {
  try {
    const { data: cart } = await http.patch(config.apiEndpoint + "/cart", req);
    return cart;
  } catch (ex) {
    console.log(ex);
  }
};

const updateTip = async (userId, tip) => {
  try {
    const { data: total } = await http.patch(config.apiEndpoint + "/cart/tip", {
      _id: userId,
      tip,
    });

    return total;
  } catch (er) {
    console.log(er);
  }
};

const getCart = async (userId, menuId) => {
  //fetch the users cart
  try {
    const { data: res } = await http.get(
      config.apiEndpoint + `/cart/${userId}`
    );

    //get the current selected options for thr current menu
    let selectedOptionsId = res.cart.items.find((m) => m.menu._id === menuId);
    if (!selectedOptionsId)
      return {
        selectedOptionsId: [],
        res,
      };

    selectedOptionsId = selectedOptionsId.menu.options; //select the current options

    return {
      selectedOptionsId,
      res,
    };
  } catch (ex) {
    if (ex.response.status === 404) {
      alert("404 Cart not found");
    }
  }
};

const setCart = async (userId, cart) => {
  try {
    await http.patch(`${config.apiEndpoint}/cart/setcart`, {
      userId,
      cart,
    });
  } catch (error) {
    console.log(error);
  }
};

const handleQuantityChange = async (operator, menuId, userId) => {
  try {
    let { data } = await http.patch(config.apiEndpoint + "/cart/quantity", {
      operator,
      menuId,
      userId,
    });

    //find the current quantity.................
    let { menu } = data.find(({ menu }) => menu._id === menuId);
    let quantity = menu.quantity;

    return quantity;
  } catch ({ response }) {
    if (response.status === 400) alert(response.data);
  }
};

const getPopulatedCart = async (id) => {
  try {
    const { data: cart } = await http.get(
      config.apiEndpoint + `/cart/populate/${id}`
    ); //returns object

    return cart;
  } catch (ex) {
    console.log(ex);
  }
};

const deleteMenu = async (userId, menuId) => {
  try {
    //delete the item from the cart
    const { data } = await http.delete(
      config.apiEndpoint + `/cart/${userId}/${menuId}`
    );

    //retun the new populated cart
    return await getPopulatedCart(userId);
  } catch (ex) {
    if (ex.response.status === 404) return alert("Item allready deleted");
  }
};

export default {
  updateCart,
  getCart,
  handleQuantityChange,
  getPopulatedCart,
  deleteMenu,
  updateTip,
  setCart,
};
