import React from "react";
import s from "./Loading.module.scss";

const Loading = () => {
  return (
    <div>
      <div className={s.preloader}>
        <img src={"/preloader.svg"} width="50" alt="preloader"></img>
      </div>
    </div>
  );
};

export default Loading;
