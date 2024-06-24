import reducerUser from "./reducers/reducerUser";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        reducerUser,
    }
})
 