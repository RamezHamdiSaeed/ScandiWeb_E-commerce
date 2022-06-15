import { combineReducers, configureStore } from "@reduxjs/toolkit";
import basketReducer from './Features/Basket/basketSlice';
//* since the basketReducer is supposed to contain the list of items in the basket
export const reducer = combineReducers({ basket: basketReducer });
const store = configureStore({ reducer });

export default store;
// typescript type for the combined state
export type State = ReturnType<typeof reducer>;
