import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "./reducers/MainSlice";
import formReducer from "./reducers/FormSlice";

const rootReducer = combineReducers({
  mainReducer,
  formReducer,
});

// вместо createStore

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

// получаем тип нашего состояния
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
