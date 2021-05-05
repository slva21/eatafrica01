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

export default {
  editUser,
};
