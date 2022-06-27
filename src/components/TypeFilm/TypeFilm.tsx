import React from "react";
import { Dropdown } from "react-bootstrap";
import type { FunctionComponent } from "react";
import { TypeOfFilm } from "../../types/filmType";

type TypeFilm = {
  newTypeFilm: (value: string) => void;
};

const TypeFilm: FunctionComponent<TypeFilm> = ({ newTypeFilm }) => {
  const sortFunc = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.target as HTMLElement;
    if (el.innerText === "Фильм") {
      newTypeFilm(TypeOfFilm.FILM);
    }
    if (el.innerText === "TV-шоу") {
      newTypeFilm(TypeOfFilm.TV_SHOW);
    }
    if (el.innerText === "Все") {
      newTypeFilm(TypeOfFilm.ALL);
    }
  };
  return (
    <div>
      <Dropdown style={{ marginTop: 10, marginRight: 10 }} autoClose="outside">
        <Dropdown.Toggle variant="secondary" id="dropdown-button-dark-example1">
          Выбрать тип фильма
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item
            style={{ fontSize: 20, marginTop: 5 }}
            onClick={sortFunc}
          >
            Фильм
          </Dropdown.Item>
          <Dropdown.Item
            style={{ fontSize: 20, marginTop: 5 }}
            onClick={sortFunc}
          >
            TV-шоу
          </Dropdown.Item>
          <Dropdown.Item
            style={{ fontSize: 20, marginTop: 5 }}
            onClick={sortFunc}
          >
            Все
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div>
        <div className="row">
          <div className="col-md-12"></div>
        </div>
      </div>
    </div>
  );
};

export default TypeFilm;
