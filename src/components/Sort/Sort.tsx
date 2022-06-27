import React from "react";
import { Dropdown } from "react-bootstrap";
import type { FunctionComponent } from "react";
import { SortType } from "../../types/sortTypes";

type TSort = {
  newSort: (value: string) => void;
};

const Sort: FunctionComponent<TSort> = ({ newSort }) => {
  const sortFunc = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.target as HTMLElement;
    if (el.innerText === "По популярности") {
      newSort(SortType.RATING);
    }
    if (el.innerText === "По количеству оценок") {
      newSort(SortType.NUM_VOTE);
    }
    if (el.innerText === "По году выпуска") {
      newSort(SortType.YEAR);
    }
  };
  return (
    <div style={{ marginLeft: 10 }}>
      <Dropdown style={{ marginTop: 10, marginRight: 10 }} autoClose="outside">
        <Dropdown.Toggle variant="secondary" id="dropdown-button-dark-example1">
          Сортировать
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item
            style={{ fontSize: 20, marginTop: 5 }}
            onClick={sortFunc}
          >
            По популярности
          </Dropdown.Item>
          <Dropdown.Item
            style={{ fontSize: 20, marginTop: 5 }}
            onClick={sortFunc}
          >
            По количеству оценок
          </Dropdown.Item>
          <Dropdown.Item
            style={{ fontSize: 20, marginTop: 5 }}
            onClick={sortFunc}
          >
            По году выпуска
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

export default Sort;
