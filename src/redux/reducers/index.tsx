import { combineReducers } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'

const usersPersistConfig = {
  key: "usersRegistered",
  storage
}

const reducers = combineReducers({
  users: persistReducer(usersPersistConfig, usersReducer)
})

export default reducers