import React, { FormEventHandler } from "react";
import type { FunctionComponent } from "react";
import s from "./Search.module.scss";
import { Button } from "react-bootstrap";

type TSearch = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: FormEventHandler<HTMLFormElement> | undefined;
};

const Search: FunctionComponent<TSearch> = ({ value, onChange, onSubmit }) => (
  <div>
    <form onSubmit={onSubmit} className={s.form} action="">
      <input
        style={{ width: 250 }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="form-control"
        placeholder="введите запрос"
        aria-label="Поиск"
        type="search"
        data-testid="search"
      ></input>
      <Button type="submit" variant="secondary">
        Искать
      </Button>{" "}
    </form>
  </div>
);

export default Search;
