import React, { FunctionComponent } from "react";
import { TMiniCard } from "../../types/miniCardTypes";
import s from "./MiniCard.module.scss";

type MyProps = {
  value2: TMiniCard[];
};

const MiniCard: FunctionComponent<MyProps> = ({ value2 }) => (
  <div data-testid="miniCard" className={s.wrap}>
    <div>
      {value2.map((el, i) => (
        <div key={i} className={s.wrap_card}>
          {Object.values(el).map((elem, index) =>
            `${elem}`.includes("blob") ? (
              <img
                key={index}
                alt={"avatar"}
                className={s.wrap_img}
                src={`${elem}`}
              ></img>
            ) : (
              <div key={index} className={s.wrap_item}>
                {`${elem}`}
              </div>
            )
          )}
        </div>
      ))}
    </div>
  </div>
);

export default MiniCard;
