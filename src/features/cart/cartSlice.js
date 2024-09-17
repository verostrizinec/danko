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
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.total += precio * quantity;
    },
    removeItem: (state, action) => {
      const idToRemove = action.payload;
      const itemToRemove = state.items.find(item => item.id === idToRemove);
      if (itemToRemove) {
        state.items = state.items.filter(item => item.id !== idToRemove);
        state.total -= itemToRemove.precio * itemToRemove.quantity;
      }
    },
    incrementItem: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.total += item.precio;
      }
    },
    decrementItem: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.total -= item.precio;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addItemCart, removeItem, incrementItem, decrementItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
