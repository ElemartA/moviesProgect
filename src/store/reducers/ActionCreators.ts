import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API_KEY from "../../config/apiConstant";

type TPropsRespose = {
  numberPage: string;
  sort: string;
  typeFilm: string;
  yearFrom: number;
  yearTo: number;
  value: string;
};

type TPropsId = {
  id: string;
};

const fetchMain = createAsyncThunk(
  "main/fetchAll",
  async (props: TPropsRespose, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/?type=${props.typeFilm}&ratingFrom=0&ratingTo=10&yearFrom=${props.yearFrom}&yearTo=${props.yearTo}&order=${props.sort}&keyword=${props.value}&page=${props.numberPage}`,
        {
          headers: {
            "X-API-KEY": API_KEY,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        "Ошибка загрузки! Повторите попытку позже"
      );
    }
  }
);

const fetchVideo = createAsyncThunk(
  "video/fetchAll",
  async (props: TPropsId, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${props.id}/videos`,
        {
          headers: {
            "X-API-KEY": API_KEY,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Ошибка!");
    }
  }
);

const fetchFacts = createAsyncThunk(
  "fact/fetchAll",
  async (props: TPropsId, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${props.id}/facts`,
        {
          headers: {
            "X-API-KEY": API_KEY,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Ошибка!");
    }
  }
);

export { fetchMain, fetchVideo, fetchFacts };
