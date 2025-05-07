import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Reducer/reducer";

export const store =configureStore({
    reducer:{
        cart: reducer
    }
})