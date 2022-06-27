import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link, matchPath, useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";

const Crumb = () => {
  const { kinopoiskId } = useAppSelector((state) => state.mainReducer);
  const location = useLocation();
  const homeMatches = matchPath({ path: "/", end: true }, location.pathname);
  const aboutMatches = matchPath(
    { path: "/about", end: true },
    location.pathname
  );
  const formMatches = matchPath(
    { path: "/form", end: true },
    location.pathname
  );
  const filmMatches = matchPath(
    { path: "/film", end: false },
    location.pathname
  );

  return (
    <div className="container mt-5">
      <Breadcrumb>
        {homeMatches && <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>}
        {aboutMatches && <Breadcrumb.Item href="/about">О нас</Breadcrumb.Item>}
        {formMatches && <Breadcrumb.Item href="/form">Форма</Breadcrumb.Item>}

        {filmMatches && (
          <div>
            <Breadcrumb.Item href="/film" active>
              <Link to="">Главная </Link> / Фильм/{kinopoiskId}
            </Breadcrumb.Item>
          </div>
        )}
      </Breadcrumb>
    </div>
  );
};

export default Crumb;
