import http from "./httpConfig";
import config from "../config.json";
import { toast } from "react-toastify";

const getSellers = async () => {
  try {
    const { data: res } = await http.get(config.apiEndpoint + "/sellers");
    let kitchens = res.map((m) => ({
      sellerInfo: {
        _id: m._id,
        name: m.name,
        storeName: m.storeName,
        banner: config.apiEndpoint + `/sellers/banner/${m._id}`,
        city: {
          name: m.city.name,
          _id: m.city._id,
        },
        contact: m.contact,
        stars: m.stars,
        origin: {
          name: m.origin.name,
          _id: m.origin._id,
          path: m.origin.path,
        },
        description: m.description,
        ratingAverage: m.ratingAverage,
        offersDelivery
: m.offersDelivery
,
      },
      menu: m.menu.map((m) => ({
        foodPicUrl: config.apiEndpoint + `/menus/foodPic/${m._id}`,
        ...m,
      })),
    }));
    //console.log(kitchens);
    return kitchens;
  } catch (ex) {
    // if (ex.response.status === 404) {
    //     alert('404 No kitchens found')
    // }
  }
};

const getSeller = async (id) => {
  try {
    const { data: res } = await http.get(config.apiEndpoint + `/sellers/${id}`);

    let seller = {
      sellerInfo: {
        _id: res._id,
        name: res.name,
        storeName: res.storeName,
        banner: config.apiEndpoint + `/sellers/banner/${res._id}`,
        city: {
          name: res.city.name,
          _id: res.city._id,
        },
        contact: res.contact,
        stars: res.stars,
        origin: {
          name: res.origin.name,
          _id: res.origin._id,
          path: res.origin.path,
        },
        description: res.description,
        ratingAverage: res.ratingAverage,
        storeNotes: res.storeNotes,
        offersDelivery: res.offersDelivery
        ,
      },
      menu: res.menu.map((m) => ({
        foodPicUrl: config.apiEndpoint + `/menus/foodPic/${m._id}`,
        ...m,
      })),
    };
    return seller;
  } catch (ex) {
    console.log(ex);

    // if (ex.esponse.status === 404) {
    //     alert('404 No kitchen found')
    // }
  }
};

const getNearSellers = async(userId, addressIndex) => {
  try {
    const {data: res} = await http.get(`${config.apiEndpoint}/sellers/nearSellers/${userId}/${addressIndex}`);

    let kitchens = res.map((m) => ({
      sellerInfo: {
        _id: m._id,
        name: m.name,
        storeName: m.storeName,
        banner: config.apiEndpoint + `/sellers/banner/${m._id}`,
        city: {
          name: m.city.name,
          _id: m.city._id,
        },
        contact: m.contact,
        stars: m.stars,
        origin: {
          name: m.origin.name,
          _id: m.origin._id,
          path: m.origin.path,
        },
        description: m.description,
        ratingAverage: m.ratingAverage,
        offersDelivery: m.offersDelivery,
      },
      
      menu: m.menu.map((m) => ({
        foodPicUrl: config.apiEndpoint + `/menus/foodPic/${m._id}`,
        ...m,
      })),
    }));

    return kitchens;

  } catch (error) {
    console.log(error.message)
  }
}


const deleteNote = async (sellerId, noteId) => {
  try {
    const configg = {
      headers: {
        "x-seller-token": window.localStorage.getItem("token"),
      },
    };
    const { data } = await http.patch(
      `${config.apiEndpoint}/sellers/deletestorenote/${sellerId}`,
      {
        noteId,
      },
      configg
    );

    return data;
  } catch (error) {
    if (error.response.status === 404) {
      return "Note already deleted";
    }
  }
};

const addNote = async (sellerId, note) => {
  try {
    const configg = {
      headers: {
        "x-seller-token": window.localStorage.getItem("token"),
      },
    };
    const { data } = await http.patch(
      `${config.apiEndpoint}/sellers/addstorenote/${sellerId}`,
      {
        note,
      },
      configg
    );

    return data;
  } catch (error) {
    if (error.response.status === 400) {
      toast.warn("The Max is 3 sorry..", {
        position: "top-right",
        autoClose: 2000,
      });
    }
    return;
  }
};

const editSeller = async (id, body) => {
  try {
    const configg = {
      headers: {
        "x-seller-token": window.localStorage.getItem("token"),
      },
    };
    const { data } = await http.patch(
      `${config.apiEndpoint}/sellers/${id}`,
      body, // kitchen name, description, city
      configg
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

const editBanner = async (form) => {
  try {
    const configg = {
      headers: {
        "x-seller-token": window.localStorage.getItem("token"),
      },
    };
    const { data: res } = await http.patch(
      `${config.apiEndpoint}/sellers/banner`,
      form,
      configg
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export default {
  getSellers,
  getSeller,
  editSeller,
  deleteNote,
  addNote,
  editBanner,
  getNearSellers
};
