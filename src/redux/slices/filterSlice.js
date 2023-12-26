import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   productId: 0,
  priceSort: "по возрастанию",
  materialSort: "металл",
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
