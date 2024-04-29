import { configureStore } from "@reduxjs/toolkit";
import StoreApi from "./features/api";

let store = configureStore({
  reducer: {
    StoreApi,
  },
});

export default store;
