import React, { FunctionComponent } from "react";
import { Button, Modal } from "react-bootstrap";
import { TCountries, TGenres } from "../../types/defaultStateTypes";
import s from "./Articles.module.scss";

type TArticles = {
  isVisible: boolean;
  onHide: () => void;
  nameRu: string;
  year: string;
  ratingKinopoisk: number;
  countries: TCountries[];
  genres: TGenres[];
  img: string;
};

const Articles: FunctionComponent<TArticles> = ({
  isVisible,
  onHide,
  nameRu,
  year,
  ratingKinopoisk,
  countries,
  genres,
  img,
}) => {
  return (
    <Modal show={isVisible} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{nameRu}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <>
          <div className={s.body}>
            <img style={{ width: 350 }} src={img}></img>
            <div className={s.body__block}>
              {countries.map((item, index) => (
                <p key={index}>
                  {" "}
                  <strong>Страна:</strong>
                  <span> {item.country}</span>
                </p>
              ))}
              <p>
                <strong>Жанр:</strong>{" "}
                {genres.map((item, index) => (
                  <span key={index}> {item.genre}</span>
                ))}
              </p>
              <p>
                <strong>Рейтинг: </strong>
                <span> {ratingKinopoisk}</span>
              </p>

              <p>
                <strong>Год выпуска: </strong>
                <span>{year}</span>
              </p>
            </div>
          </div>
        </>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Articles;
