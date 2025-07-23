import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "all",
  sort: "all",
  page: 1,
  totalPages: 1,
};
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
      state.page = 1;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
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
  usersSlice.actions;

export default usersSlice.reducer;
