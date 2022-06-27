import React from "react";
import s from "./About.module.scss";

const About = () => (
  <div data-testid="aboutPage" className={s.container}>
    <h2 className={s.container__title}>Kinopoisk Api Unofficial</h2>
    <p>Неофициальное api для доступа к актуальной информации кинопоиска.</p>
    <ol>
      <li>
        Апи для тех кто хочет получать все данные о фильмах максимально быстро в
        удобном формате.
      </li>
      <li>
        На кинопоиск каждый день добавляются сотни данных о новинках
        кинематографа, актерах, режиссерах.
      </li>
      <li>
        Пока Вы отдыхаете или занимаетесь своими проектами - мы следим за
        обновлениями на кинопоиск и загружаем данные в api
      </li>
    </ol>
  </div>
);

export default About;
