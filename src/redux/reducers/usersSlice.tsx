import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: Users = {
  users: {
    users: []
  }
}

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addRegisteredUsersAction: (state, action: PayloadAction<User>) => {
      state.users.users.push(action.payload)
    }
  }
})

export const { addRegisteredUsersAction } = userSlice.actions
export default userSlice.reducer