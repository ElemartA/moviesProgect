import React from "react";
import s from "./NotFound.module.scss";

class NotFound extends React.Component {
  render() {
    return (
      <div data-testid="notFoundPage" className={s.container}>
        <img src={"/404.png"} alt="страница не найдена" />
      </div>
    );
  }
}

export default NotFound;
