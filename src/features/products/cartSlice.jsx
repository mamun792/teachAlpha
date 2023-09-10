import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  quantity: 0,
  cartTotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const exitingProduct = state.cart.findIndex(
        (item) => item.id === product.id
      );
      if (exitingProduct >= 0) {
        state.cart[exitingProduct].quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    removeCart(state, action) {
      const updateCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = updateCart;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    clearCart(state, action) {
      state.cart = [];
      //update local storage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    decreaseCart(state, action) {
      const product = action.payload;
      const exitingProduct = state.cart.findIndex(
        (item) => item.id === product.id
      );

      if (state.cart[exitingProduct].quantity > 1) {
        state.cart[exitingProduct].quantity--;
      } else if (state.cart[exitingProduct].quantity === 1) {
        const updateQuantity = (state.cart = state.cart.filter(
          (item) => item.id !== product.id
        ));
        state.cart = updateQuantity;
      }

      // Update local storage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { addToCart, removeCart, clearCart, decreaseCart } =
  cartSlice.actions;

export default cartSlice.reducer;
