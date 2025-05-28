import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    order: {
      title: "",
      date: "",
      time: "",
      location: "",
      cinema: "",
      seat: [],
      totalPrice: 0
    }
  }

const order = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrderAction: (state, action) => {
      state.order = {...state.order,...action.payload}
    },
    addSeatsAction: (state, action) => {
      state.order.seat = action.payload
    },
    resetOrder: (state) => {
      state.order = {
        title: "",
        date: "",
        time: "",
        location: "",
        cinema: "",
        seat: [],
        totalPrice: 0
      }
    }
  },
})

export const { addOrderAction, addSeatsAction, resetOrder } = order.actions;
export default order.reducer