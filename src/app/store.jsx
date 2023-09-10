import { configureStore } from "@reduxjs/toolkit";
import productReducer, {
  productFeatch,
} from "../features/products/productSlice";
import cartReducere from "../features/products/cartSlice"

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart:cartReducere,
  },
});

 store.dispatch(productFeatch());


