import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string,
  email: string,
  password: string
  createdAt?: string
}
interface Users {
  users: User[]
}

const initialState: Users = {
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