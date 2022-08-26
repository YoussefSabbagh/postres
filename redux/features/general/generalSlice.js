import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
  cart: Cookies.get('MariasCart')
    ? JSON.parse(Cookies.get('MariasCart'))
    : { cartItems: [], shippingAddress: {}, paymentMethod: '' },
};

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    updateCart: (state, action) => {
      const newItem = action.payload;

      console.log('Elemento a actualizar', newItem);

      const existItem = state.cart.cartItems.find(
        (item) => item.id === newItem.id
      );

      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];

      console.log('Elemento', cartItems);

      return { ...state, cart: { ...state.cart, cartItems } };
    },
  },
});

export const { updateCart } = generalSlice.actions;
export default generalSlice.reducer;
