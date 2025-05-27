import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
import { persistStore } from "redux-persist";

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: true, // ['persist/PERSIST'] 
      }
    }),
});

export const persistor = persistStore(store) 

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;