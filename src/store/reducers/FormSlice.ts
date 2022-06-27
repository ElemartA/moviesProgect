import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TFormState } from "../../types/formStateType";
import { TMiniCard } from "../../types/miniCardTypes";

export const formState: TFormState = {
  miniCardValue: [],
};

export const formSlice = createSlice({
  name: "form",
  initialState: formState,
  reducers: {
    crete_miniCard(state, action: PayloadAction<Array<TMiniCard>>) {
      state.miniCardValue = [...action.payload];
    },
  },
});

export default formSlice.reducer;
