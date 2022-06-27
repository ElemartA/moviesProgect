import React from "react";
import Main from "./pages/Main";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import NotFound from "./pages/NotFound/NotFound";
import MyForm from "./pages/MyForm";
import CardPage from "./pages/CardPage/CardPage";
import { useAppSelector } from "./hooks/redux";

function AppRouter(): JSX.Element {
  const { kinopoiskId } = useAppSelector((state) => state.mainReducer);
  return (
    <Routes>
      <Route key={"/"} path={"/"} element={<Main />} />;
      <Route
        key={"/film"}
        path={"/film" + "/" + kinopoiskId}
        element={<CardPage id={kinopoiskId} />}
      />
      <Route key={"/about"} path={"/about"} element={<About />} />;
      <Route key={"/form"} path={"/form"} element={<MyForm />} />;
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
