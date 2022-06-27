import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import OneCard from "./OneCard";

describe("Card", () => {
  it("renders Card component", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <OneCard
          img={""}
          nameRu={""}
          ratingKinopoisk={0}
          year={""}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
    screen.debug();
    expect(screen.getByTestId("card")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
