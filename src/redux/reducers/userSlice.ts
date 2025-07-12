import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: UserState = {
  user: {
    id: "",
    email: "",
    password: "",
    createdAt: "",
    isLogin: false,
    history: [],
    token: "",
  },
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    addInfoLoginAction: (state, action: PayloadAction<User>) => {
      state.user = { ...action.payload, isLogin: true };
    },
    logoutUserAction: (state) => {
      state.user = {
        id: "",
        email: "",
        password: "",
        createdAt: "",
        token: "",
        isLogin: false,
      };
    },
    addHistoryUserAction: (state, action) => {
      state.user.history?.push(action.payload);
    },
  },
});

export const { addInfoLoginAction, logoutUserAction, addHistoryUserAction } =
  user.actions;
export default user.reducer;
