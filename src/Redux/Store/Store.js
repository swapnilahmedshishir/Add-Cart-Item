//import { createStore } from "react-redux";
import cartReducers from "../Reducers/cartReducers";
import { createStore } from 'redux';

export const store = createStore(cartReducers);