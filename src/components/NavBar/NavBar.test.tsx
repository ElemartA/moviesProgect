import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";

describe("NavBar", () => {
  it("renders NavBar component", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
    screen.debug();
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.queryByText(/Главная/i)).toBeInTheDocument();
    expect(screen.queryByText(/О нас/i)).toBeInTheDocument();
    expect(screen.queryByText(/Форма/i)).toBeInTheDocument();
  });
});
