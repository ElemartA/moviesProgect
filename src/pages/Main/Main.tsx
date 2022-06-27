import React, { useEffect } from "react";
import OneCard from "../../components/Card/OneCard";
import Search from "../../components/Search";
import s from "./Main.module.scss";
import Loading from "../../components/Loading";
import PageNumber from "../../components/PageNumber";
import Sort from "../../components/Sort/Sort";
import TypeFilm from "../../components/TypeFilm/TypeFilm";
import YearFromTo from "../../components/Years/YearFromTo";
import { useNavigate } from "react-router-dom";
import { defaultState, mainSlice } from "../../store/reducers/MainSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchMain } from "../../store/reducers/ActionCreators";

const Main = () => {
  const {
    filterMovies,
    numberPage,
    sort,
    typeFilm,
    yearFrom,
    yearTo,
    value,
    totalPages,
    isLoading,
    error,
  } = useAppSelector((state) => state.mainReducer);
  const {
    update_number_page,
    update_sort,
    update_type_film,
    update_year_from,
    update_year_to,
    update_value,
    update_id_film,
  } = mainSlice.actions;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const getMovies = async () => {
    dispatch(
      fetchMain({
        typeFilm: typeFilm,
        yearFrom: yearFrom,
        yearTo: yearTo,
        sort: sort,
        value: value,
        numberPage: numberPage,
      })
    );
  };

  useEffect(() => {
    getMovies();
  }, [numberPage, sort, typeFilm, yearFrom, yearTo]);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    getMovies();
    dispatch(update_number_page(defaultState.numberPage));
  };

  const newValue = async (text: string) => {
    dispatch(update_value(text));
  };

  const newPage = async (num: string) => {
    dispatch(update_number_page(num));
  };

  const newSort = (value: string) => {
    dispatch(update_sort(value));
  };

  const newTypeFilm = (value: string) => {
    dispatch(update_type_film(value));
  };

  const newYearFrom = (value: number) => {
    dispatch(update_year_from(value));
  };

  const newYearTo = (value: number) => {
    dispatch(update_year_to(value));
  };

  return (
    <div data-testid="mainPage" className={s.container}>
      <Search
        value={value}
        onChange={(value: string) => {
          newValue(value);
        }}
        onSubmit={handleSubmit}
      />
      <div className={s.container__sort}>
        <Sort
          newSort={(value: string) => {
            newSort(value);
          }}
        />
        <TypeFilm
          newTypeFilm={(value: string) => {
            newTypeFilm(value);
          }}
        />
        <YearFromTo
          newYearFrom={(value: number) => newYearFrom(value)}
          newYearTo={(value: number) => newYearTo(value)}
        />
      </div>
      {isLoading && <Loading />}
      {error.length === 0 ? (
        <div className={s.wrap}>
          {filterMovies.map((item, index) => (
            <OneCard
              key={index}
              nameRu={item.nameRu}
              year={item.year}
              ratingKinopoisk={item.ratingKinopoisk}
              img={item.posterUrlPreview}
              onClick={() => {
                dispatch(update_id_film(item.kinopoiskId));
                navigate("/film" + "/" + item.kinopoiskId);
              }}
            />
          ))}
        </div>
      ) : (
        <p
          style={{
            marginLeft: "50%",
            marginTop: "15px",
            color: "black",
            fontSize: 20,
          }}
        >
          {error}
        </p>
      )}
      <PageNumber
        onClick={(numb: string) => {
          newPage(numb);
        }}
        value={numberPage}
        pageCount={totalPages}
      />
    </div>
  );
};

export default Main;
