import http from "./httpConfig";
import config from "../config.json";

//editing name and phone
const editUser = async (UserInfo) => {
  try {
    const { data: res } = await http.patch(`${config.apiEndpoint}/users/edit`, {
      userId: UserInfo.userId,
      name: UserInfo.name,
      phone: UserInfo.phone,
    });

    return res;
  } catch (error) {
    console.log(error.message);
  }
};


const addAddress = async ({postcode,addressLine1, addressLine2, cityId,userId}) => {
  try {
    const { data: res } = await http.patch(`${config.apiEndpoint}/users/address`, {
      userId,
      postcode,
      addressLine1,
      addressLine2,
      cityId
    });

    return res;
  } catch (error) {
    console.log(error.message);
  }
};


export default {
  editUser,
  addAddress
};
