import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
};

export const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    removeOrder: (state, action) => {
      const idToRemove = action.payload;
      state.orders = state.orders.filter(order => order.id !== idToRemove);
    },
  },
});

export const { addOrder, removeOrder } = orderSlice.actions;

export default orderSlice.reducer;
