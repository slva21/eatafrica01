import http from "./httpConfig";
import config from "../config.json";

const getMenu = async (id) => {
  try {
    const { data: res } = await http.get(config.apiEndpoint + `/menus/${id}`);
    let menu = res;
    menu.foodPicUrl = config.apiEndpoint + `/menus/foodPic/${id}`;

    return menu;
  } catch (ex) {
    if (ex.response.status === 404) {
      console.log("404 menu not found");
    }
  }
};

const editFoodPic = async (form) => {
  try {
    // const configg = {
    //   headers: {
    //     "x-seller-token": window.localStorage.getItem("token"),
    //   },
    // };
    const { data: res } = await http.patch(
      `${config.apiEndpoint}/menus/foodPic`,
      form
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

const saveMenu = async (menuId, menu) => {
  try {
    const configg = {
      headers: {
        "x-seller-token": window.localStorage.getItem("token"),
      },
    };
    const { data: res } = await http.patch(
      `${config.apiEndpoint}/menus/${menuId}`,
      menu,
      configg
    );
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export default {
  getMenu,
  editFoodPic,
  saveMenu,
};
