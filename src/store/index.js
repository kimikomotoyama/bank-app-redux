import { createStore } from "redux";
import { processBankRequest } from "../reducers";

const initialState = {
  username: "Janny",
  totalAmount: 2500701
};

const store = createStore(processBankRequest, initialState);

export default store;