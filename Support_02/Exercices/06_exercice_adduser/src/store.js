import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./redux/usersSlice";

const store = configureStore({
    reducer: {
        [usersSlice.name]: usersSlice.reducer
    }
})

export default store;