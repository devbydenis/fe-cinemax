import { combineReducers } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import userReducer from "./userSlice";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'

const usersPersistConfig = {
  key: "usersRegistered",
  storage
}

const userPersistConfig = {
  key: "userLogin",
  storage
}

const reducers = combineReducers({
  users: persistReducer(usersPersistConfig, usersReducer),
  user: persistReducer(userPersistConfig, userReducer)
})

export default reducers