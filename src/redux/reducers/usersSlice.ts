import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: User[] = {
  users: []
}


const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addRegisteredUsersAction: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload)
    }
  }
})

export const { addRegisteredUsersAction } = userSlice.actions
export default userSlice.reducer