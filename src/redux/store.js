import { createStore } from "redux";
import coinReducer from "./coins/coinReducer";

const store = createStore(coinReducer);

export default store;
