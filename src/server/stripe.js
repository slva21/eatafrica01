import http from "./httpConfig";
import config from "../config.json";

const getOnBoardingLink = async (sellerId) => {
  try {
    const { data: link } = await http.get(
      `${config.apiEndpoint}/stripe/accountlink/${sellerId}`
    );

    return link.url;
  } catch (error) {
    console.log(error.message);
  }
};

const getLoginLink = async (sellerId) => {
  try {
    const { data: link } = await http.get(
      `${config.apiEndpoint}/stripe/loginLink/${sellerId}`
    );

    return link.url;
  } catch (error) {
    console.log(error.message);
  }
};

const createCharge = async (id, sellerId) => {
  try {
    const { data } = await http.post(
      `${config.apiEndpoint}/stripe/createcharge`,
      {
        id,
        sellerId,
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

const createSession = async (sellerId, userId, orderId) => {
  try {
    const { data } = await http.post(
      `${config.apiEndpoint}/stripe/createsession`,
      {
        sellerId,
        userId,
        orderId,
      }
    );

    return data.id;
  } catch (error) {
    console.log(error);
  }
};

export default {
  getOnBoardingLink,
  createCharge,
  createSession,
  getLoginLink,
};
