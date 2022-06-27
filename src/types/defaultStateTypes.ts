import { TVideo } from "./videoTypes";
import { TFacts } from "./factsType";

export type TDefaultState = {
  filterMovies: Array<TData>;
  value: string;
  sort: string;
  typeFilm: string;
  yearFrom: number;
  yearTo: number;
  numberPage: string;
  kinopoiskId: string;
  totalPages: number;
  isLoading: boolean;
  error: string;
  video: TVideo;
  facts: TFacts;
};

export type TData = {
  posterUrlPreview: string;
  year: string;
  countries: TCountries[];
  ratingKinopoisk: number;
  nameRu: string;
  genres: TGenres[];
  kinopoiskId: string;
};

export type TCountries = {
  country: string;
};

export type TGenres = {
  genre: string;
};
