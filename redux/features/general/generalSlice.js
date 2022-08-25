import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
  cart: Cookies.get('cart')
    ? JSON.parse(Cookies.get('cart'))
    : { cartItems: [], shippingAddress: {}, paymentMethod: '' },
};

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    updateCard: (state, action) => {
      state.client.toggleForm = !state.client.toggleForm;
      state.numOfProduct = action.payload;
    },
  },
});

export const { updateCart } = generalSlice.actions;
export default generalSlice.reducer;
