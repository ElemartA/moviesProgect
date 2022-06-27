import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import About from "./About";

describe("About", () => {
  it("renders About component", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
    screen.debug();
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByRole("heading")).toHaveTextContent(
      "Kinopoisk Api Unofficial"
    );
    expect(screen.queryByText(/Апи для тех кто хочет/i)).toBeInTheDocument();
    expect(screen.queryByText(/Пока Вы отдыхаете/i)).toBeInTheDocument();
    expect(screen.queryByText(/О нас/i)).toBeNull();
  });
});
