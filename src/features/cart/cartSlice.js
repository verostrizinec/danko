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
    clearCart:(state) => {
        state.items = [],
        state.total = 0
    }
  },
});

export const { addItemCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
