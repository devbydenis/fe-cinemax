import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import usersReducer from "./usersSlice";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import orderReducer from "./orderSlice";

const usersPersistConfig = {
  key: "usersRegistered",
  storage
}

const userPersistConfig = {
  key: "userLogin",
  storage
}

const orderPersistConfig = {
  key: "order",
  storage
}

const reducers = combineReducers({
  users: persistReducer(usersPersistConfig, usersReducer),
  user: persistReducer(userPersistConfig, userReducer),
  order: persistReducer(orderPersistConfig, orderReducer),
  movies: moviesReducer
})

export default reducers