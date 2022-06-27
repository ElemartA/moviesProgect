import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Search from "./Search";

describe("Search", () => {
  it("renders Search component", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Search
          value={""}
          onChange={function (): void {
            throw new Error("Function not implemented.");
          }}
          onSubmit={undefined}
        />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
    screen.debug();
    expect(screen.getByRole("searchbox")).toBeInTheDocument();
    expect(screen.queryByText(/Главная/i)).toBeNull();
  });
});

test("INPUT EVENT", () => {
  render(
    <Search
      value={""}
      onChange={function (): void {
        throw new Error("Function not implemented.");
      }}
      onSubmit={undefined}
    />
  );
  const input = screen.getByTestId("search") as HTMLInputElement;
  expect(input).toContainHTML("");
  fireEvent.blur(input, {
    target: { value: "тестовая строка" },
  });
  expect(input).toHaveValue("тестовая строка");
});
