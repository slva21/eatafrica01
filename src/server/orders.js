import http from "./httpConfig";
import config from "../config.json";
import { toast } from "react-toastify";

const createOrder = async (userId, deliveryNote, items) => {
  try {
    const { data: order } = await http.post(
      `${config.apiEndpoint}/orders/createOrder`,
      {
        userId,
        deliveryNote,

        items,
      }
    );

    return order;
  } catch (error) {
    console.log(error);
  }
};

const addETA = async (orderId, date, time) => {
  try {
    const configg = {
      headers: {
        "x-seller-token": window.localStorage.getItem("token"),
      },
    };

    const { data: res } = await http.patch(
      `${config.apiEndpoint}/orders/addeta`,
      {
        orderId,
        date,
        time,
      },
      configg
    );

    return res;
  } catch (error) {
    console.log(error.message);
  }
};

const getOrderSetStatus2 = async (orderId) => {
  //calling this endpiont will set that order status too paid(2)
  try {
    const { data: order } = await http.get(
      `${config.apiEndpoint}/orders/paid/${orderId}`
    );
    return order;
  } catch (error) {
    if (error.response.status === 404) {
    }
  }
};

const getOrder = async (orderId) => {
  try {
    const { data: order } = await http.get(
      `${config.apiEndpoint}/orders/${orderId}`
    );
    return order;
  } catch (error) {
    if (error.response.status === 404) {
      alert("Order not found");
    }
  }
};

const addSessionId = async (sessionId, orderId) => {
  //this function is used to add the stripeSessionId to the order
  try {
    const { data } = await http.patch(
      `${config.apiEndpoint}/orders/addsessionId`,
      {
        sessionId,
        orderId,
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

const AddOrderToUser = async (userId, orderId) => {
  try {
    const { data } = await http.patch(
      `${config.apiEndpoint}/orders/addOrderToUser`,
      {
        userId,
        orderId,
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getUserOrders = async (_id) => {
  try {
    const { data: orders } = await http.get(
      `${config.apiEndpoint}/users/orders/${_id}`
    );

    return orders;
  } catch (error) {
    if (error.response.status == 404) {
      return [];
    }
  }
};

const getSellersOrders = async (_id) => {
  try {
    const { data: orders } = await http.get(
      `${config.apiEndpoint}/sellers/orders/${_id}`
    );

    return orders;
  } catch (error) {
    if (error.response.status == 404) {
      return [];
    }
  }
};

export default {
  createOrder,
  getOrder: getOrderSetStatus2,
  addSessionId,
  AddOrderToUser,
  getUserOrders,
  fetchOrder: getOrder,
  getSellersOrders,
  addETA,
};
