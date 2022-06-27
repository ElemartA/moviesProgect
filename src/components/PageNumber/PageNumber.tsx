import React from "react";
import { Pagination } from "react-bootstrap";
import s from "./PageNumber.module.scss";

type TPageNumber = {
  onClick: (value: string) => void;
  value: string;
  pageCount: number;
};

const PageNumber: React.FC<TPageNumber> = ({ onClick, value, pageCount }) => {
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  return (
    <div className={s.pagin}>
      <Pagination
        style={{
          marginBottom: 15,
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
        className="mt-5"
      >
        {pages.map((page) => {
          return (
            <Pagination.Item
              style={{
                margin: 2,
              }}
              key={page}
              active={Number(value) === page}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                onClick(e.currentTarget.innerText);
              }}
            >
              {page}
            </Pagination.Item>
          );
        })}
      </Pagination>
    </div>
  );
};

export default PageNumber;
