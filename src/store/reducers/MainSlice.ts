import { fetchFacts, fetchMain, fetchVideo } from "./ActionCreators";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TData, TDefaultState } from "../../types/defaultStateTypes";
import { TypeOfFilm } from "../../types/filmType";
import { SortType } from "../../types/sortTypes";
import { TGetDataType } from "../../types/getDataType";
import { TVideo } from "../../types/videoTypes";
import { TFacts } from "../../types/factsType";

export const defaultState: TDefaultState = {
  filterMovies: [],
  value: "",
  sort: SortType.NUM_VOTE,
  typeFilm: TypeOfFilm.FILM,
  yearFrom: 2020,
  yearTo: 2022,
  numberPage: "1",
  kinopoiskId: "",
  totalPages: 0,
  isLoading: false,
  error: "",
  video: { title: 0, items: [{ url: "", name: "", site: "" }] },
  facts: { total: 0, items: [{ text: "", type: "", spoiler: false }] },
};

export const mainSlice = createSlice({
  name: "main",
  initialState: defaultState,
  reducers: {
    update_movies(state, action: PayloadAction<Array<TData>>) {
      state.filterMovies = action.payload;
    },
    update_number_page(state, action: PayloadAction<string>) {
      state.numberPage = action.payload;
    },
    update_sort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
    update_type_film(state, action: PayloadAction<string>) {
      state.typeFilm = action.payload;
    },
    update_year_from(state, action: PayloadAction<number>) {
      state.yearFrom = action.payload;
    },
    update_year_to(state, action: PayloadAction<number>) {
      state.yearTo = action.payload;
    },
    update_value(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
    update_id_film(state, action: PayloadAction<string>) {
      state.kinopoiskId = action.payload;
    },
  },
  extraReducers: {
    [fetchMain.fulfilled.type]: (
      state,
      action: PayloadAction<TGetDataType>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.filterMovies = action.payload.items;
      state.totalPages = action.payload.totalPages;
    },
    [fetchMain.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchMain.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchVideo.fulfilled.type]: (state, action: PayloadAction<TVideo>) => {
      state.error = "";
      state.video = action.payload;
    },
    [fetchVideo.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchVideo.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchFacts.fulfilled.type]: (state, action: PayloadAction<TFacts>) => {
      state.error = "";
      state.facts = action.payload;
    },
    [fetchFacts.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchFacts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default mainSlice.reducer;
