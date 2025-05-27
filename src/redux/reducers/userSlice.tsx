import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: User = {
  id: "",
  email: "",
  password: "",
  createdAt: ""}

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    addInfoLoginAction: (state, action: PayloadAction<User>) => {
      state = action.payload
    }
  }
})

export const { addInfoLoginAction } = user.actions
export default user.reducer