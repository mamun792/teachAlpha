import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    products: [],
    status:null,
}

export const productFeatch= createAsyncThunk('products/productFeatch',async()=>{
    const response=await axios.get('https://eager-sable-airedale.glitch.me/products');
    return response.data;
    
});

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
   
    extraReducers: (builder) => {
        builder
          .addCase(productFeatch.pending, (state, action) => {
            state.status = 'loading';
          })
          .addCase(productFeatch.fulfilled, (state, action) => {
            state.status = 'success';
            state.products = action.payload;
          })
          .addCase(productFeatch.rejected, (state, action) => {
            state.status = 'failed';
          });
        },

});

export default productSlice.reducer;