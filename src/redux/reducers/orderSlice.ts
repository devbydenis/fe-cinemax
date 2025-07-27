import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    order: {
      orderId: "",
      userId: "",
      title: "",
      date_booking: "",
      time_booking: "",
      location: "",
      cinema: "",
      seats: [],
      totalPrice: 0,
      payment: '',
    },
    orders: []
  }

const order = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrderAction: (state, action) => {
      state.order = {...state.order,...action.payload}
    },
    addSeatsAction: (state, action) => {
      state.order.seats = action.payload
    },
    resetOrder: (state) => {
      state.order = {
        orderId: "",
        userId: "",
        title: "",
        date_booking: "",
        time_booking: "",
        location: "",
        cinema: "",
        seats: [],
        totalPrice: 0,
        payment: '',
      }
    }
  },
})

export const { addOrderAction, addSeatsAction, resetOrder } = order.actions;
export default order.reducer