import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MiniCard from "./MiniCard";

describe("MiniCard", () => {
  it("renders MiniCard component", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <MiniCard value2={[]} />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
    screen.debug();
    expect(screen.getByTestId("miniCard")).toBeInTheDocument();
  });
});
