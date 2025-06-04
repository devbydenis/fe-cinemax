import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type History = {
  id?:string;
  title: string;
  date: string;
  time: string;
  location: string;
  cinema: string;
  seat: string[];
  totalPrice: number;
  type?: string;
}

type Histories = {
  histories: []
}

const initialState:Histories = {
  histories: []
};

const history = createSlice({
  name: "history",
  initialState,
  reducers: {
    addHistoryAction: (state, action: PayloadAction<History>) => {
      (state.histories as History[]).push(action.payload)
    }
  },
});

export const {addHistoryAction} = history.actions;
export default history.reducer;