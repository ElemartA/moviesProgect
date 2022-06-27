import React, { FunctionComponent } from "react";
import { Card } from "react-bootstrap";
import s from "./OneCard.module.scss";

type TCardProps = {
  img: string;
  nameRu: string;
  ratingKinopoisk: number;
  year: string;
  onClick: () => void;
};

const OneCard: FunctionComponent<TCardProps> = ({
  nameRu,
  ratingKinopoisk,
  year,
  img,
  onClick,
}) => (
  <div>
    <Card
      className="bg-dark text-white"
      style={{ margin: 10, width: 270, boxShadow: `0px 1px 15px 2px black` }}
      onClick={onClick}
      data-testid="card"
    >
      <Card.Img
        src={img}
        alt="Card image"
        style={{ width: 268, height: 402 }}
      />
      <Card.ImgOverlay className={s.block}>
        <div className={s.block__title}>
          <Card.Title>{nameRu}</Card.Title>
          <Card.Text>Рейтинг: {ratingKinopoisk}</Card.Text>
          <Card.Text data-testid="year-id">Год выпуска: {year}</Card.Text>
        </div>
      </Card.ImgOverlay>
    </Card>
  </div>
);

export default OneCard;
