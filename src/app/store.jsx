import { configureStore } from "@reduxjs/toolkit";
import productReducer, {
  productFeatch,
} from "../features/products/productSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

 store.dispatch(productFeatch());


