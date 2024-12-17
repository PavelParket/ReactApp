import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import apiSlice from "./api/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
   reducer: rootReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);

export default store;