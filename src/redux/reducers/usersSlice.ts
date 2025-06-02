import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addRegisteredUsersAction: (state, action: PayloadAction<User>) => {
      (state.users as User[]).push(action.payload);
    },
  },
});

export const { addRegisteredUsersAction } = userSlice.actions;
export default userSlice.reducer;
