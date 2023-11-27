import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../component/todoSlice"

export const store = configureStore({
    reducer:todoReducer,
})

