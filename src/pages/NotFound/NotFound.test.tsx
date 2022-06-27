import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NotFound from "./NotFound";

describe("NotFound", () => {
  it("renders MyForm component", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
    screen.debug();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.queryByText(/Главная/i)).toBeNull();
  });
});
