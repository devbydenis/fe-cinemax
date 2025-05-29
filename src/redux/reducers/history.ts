import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type History = {
  id:string;
  title: string;
  date: string;
  time: string;
  location: string;
  cinema: string;
  seat: string[];
  totalPrice: number;
}

type Histories = {
  histories: History[]
}

const initialState = {
  histories: []
};

const history = createSlice({
  name: "history",
  initialState,
  reducers: {
    addHistoryAction: (state, action: { payload:PayloadAction<History>}) => {
      state.histories.push(action.payload)
    }
  },
});

export const {addHistoryAction} = history.actions;
export default history.reducer;