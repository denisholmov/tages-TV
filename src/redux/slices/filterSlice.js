import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  priceSort: 0,
  materialSort: 0,
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setPriceSort(state, action) {
      state.priceSort = action.payload;
    },
    setMaterialSort(state, action) {
      state.materialSort = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPriceSort, setMaterialSort } = filterSlice.actions;

export default filterSlice.reducer;
