import { createStore } from "redux";
import rootred from "./redux/reducers/main.js";

const store = createStore(rootred);

export default store;
