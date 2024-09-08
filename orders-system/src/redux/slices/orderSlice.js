import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  confirmedOrders: [],
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action) => {
        console.log("adding the order", state.confirmedOrders, action)
      state.confirmedOrders.push(action.payload);
    },
    clearOrders: (state) => {
      state.confirmedOrders = [];
    },
  },
});


export const { addOrder, clearOrders } = orderSlice.actions;


export default orderSlice.reducer;
