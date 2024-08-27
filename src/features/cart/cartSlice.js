import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemCart: (state, action) => {
      const { id, precio, quantity } = action.payload;
      const itemFound = state.items.find(item => item.id === id);
      if (itemFound) {
        itemFound.quantity += quantity;
      } else {
        state.items.push(action.payload);
      }
      state.total += precio * quantity;
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const itemToRemove = state.items.find(item => item.id === id);
      if (itemToRemove) {
        state.total -= itemToRemove.precio * itemToRemove.quantity;
        state.items = state.items.filter(item => item.id !== id);
      }
    },
  },
});

export const { addItemCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
