import React from "react";
import { Link } from "react-router-dom";
import s from "./NavBar.module.scss";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul className={s.header__nav}>
            <li className={s.header__list}>
              <Link data-testid="main" to="" className={s.header__link}>
                Главная
              </Link>
            </li>
            <li className={s.header__list}>
              <Link data-testid="about" to="/about" className={s.header__link}>
                О нас
              </Link>
            </li>
            <li className={s.header__list}>
              <Link data-testid="form" to="/form" className={s.header__link}>
                Форма
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
