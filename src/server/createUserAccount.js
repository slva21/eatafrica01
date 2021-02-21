import http from "./httpConfig";
import config from "../config.json";
import { toast } from "react-toastify";

const createAccount = async ({ password, email, name }) => {
  try {
    const { data: token } = await http.post(`${config.apiEndpoint}/users`, {
      password,
      email,
      name,
    });
    return token;
  } catch (error) {
    if (error.response.status === 400) {
      toast.error(error.response.data, {
        position: "bottom-center",
      });
    }
  }
};

export default {
  createAccount,
};
