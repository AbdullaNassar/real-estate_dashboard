import { configureStore } from "@reduxjs/toolkit";
import BookingsReducer from "./features/bookings/BookingSLice";
import PropertiesSlice from "./features/properties/ProprtiesSlice";
import usersSlice from "./features/users/usersSlice";
const store = configureStore({
  reducer: {
    bookings: BookingsReducer,
    properties: PropertiesSlice,
    users: usersSlice,
  },
});

export default store;
