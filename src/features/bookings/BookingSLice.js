import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "all",
  sort: "all",
  page: 1,
  totalPages: 1,
};

const BookingSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    setSort: (state, action) => {
      state.sort = action.payload;
      state.page = 1;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
      state.page = 1;
    },
    incPage: (state) => {
      state.page += 1;
    },
    decPage: (state) => {
      state.page -= 1;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
  },
});

export const { setFilter, setSort, incPage, decPage, setTotalPages } =
  BookingSlice.actions;

export default BookingSlice.reducer;
