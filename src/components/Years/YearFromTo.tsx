import React, { FunctionComponent } from "react";
import { Dropdown } from "react-bootstrap";
import { useAppSelector } from "../../hooks/redux";
import s from "./YearFromTo.module.scss";

type TYear = {
  newYearFrom: (value: number) => void;
  newYearTo: (value: number) => void;
};

const YearFromTo: FunctionComponent<TYear> = ({ newYearFrom, newYearTo }) => {
  const { yearFrom, yearTo } = useAppSelector((state) => state.mainReducer);

  const minOffset = 0;
  const maxOffset = 60;
  const thisYear = new Date().getFullYear();
  const allYears = [];
  for (let x = 0; x <= maxOffset; x++) {
    allYears.push(thisYear - x);
  }

  const yearFromClick = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.target as HTMLElement;
    newYearFrom(Number(el.innerText));
  };

  const yearToClick = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.target as HTMLElement;
    newYearTo(Number(el.innerText));
  };

  const yearList1 = allYears.map((x) => {
    return (
      <Dropdown.Item onClick={yearFromClick} key={x}>
        {x}
      </Dropdown.Item>
    );
  });
  const yearList2 = allYears.map((x) => {
    return (
      <Dropdown.Item onClick={yearToClick} key={x}>
        {x}
      </Dropdown.Item>
    );
  });
  return (
    <div className={s.wrap}>
      <Dropdown style={{ marginTop: 10, marginRight: 10 }} autoClose="outside">
        <Dropdown.Toggle variant="secondary" id="dropdown-button-dark-example1">
          С {yearFrom} года
        </Dropdown.Toggle>
        <Dropdown.Menu
          variant="dark"
          style={{ overflowY: "scroll", maxHeight: 300 }}
        >
          {yearList1}
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown style={{ marginTop: 10, marginRight: 10 }} autoClose="outside">
        <Dropdown.Toggle variant="secondary" id="dropdown-button-dark-example1">
          По {yearTo} год
        </Dropdown.Toggle>
        <Dropdown.Menu
          variant="dark"
          style={{ overflowY: "scroll", maxHeight: 300 }}
        >
          {yearList2}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default YearFromTo;
