import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: {user: User} = {
  user: {
    id: "",
    email: "",
    password: "",
    createdAt: "",
    isLogin: false
  }
}

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    addInfoLoginAction: (state, action: PayloadAction<User>) => {
      state.user = {...action.payload, isLogin: true}
    }
  }
})

export const { addInfoLoginAction } = user.actions
export default user.reducer