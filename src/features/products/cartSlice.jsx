import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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

        //totast 
        toast.info('🦄 Quantity increase!', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
      } else {
        state.cart.push({ ...product, quantity: 1 });
        toast.success('🦄 Added Product!', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    removeCart(state, action) {
      const updateCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = updateCart;
      localStorage.setItem("cart", JSON.stringify(state.cart));

      toast.warn('🦄 Remove Cart!', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    },

    clearCart(state, action) {
      state.cart = [];
      //update local storage
      localStorage.setItem("cart", JSON.stringify(state.cart));
      toast.warn('🦄 Remove Cart!', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
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

      toast.info('🦄 Quantity decrease!', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    },

    subTotal(state, action) {
      const { total, quantity } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += quantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotal = total;
      state.quantity = quantity;
    },
  },
});

export const { addToCart, removeCart, clearCart, decreaseCart, subTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
