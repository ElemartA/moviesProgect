import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  it("renders App component", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    screen.debug();
    // screen.getByText("Главная");
    // expect(screen.getByRole("navigation")).toBeInTheDocument();
    // expect(screen.queryByText(/Главная/i)).toBeInTheDocument();
    expect(screen.queryByText(/О нас/i)).toBeInTheDocument();
    expect(screen.queryByText(/Форма/i)).toBeInTheDocument();
    expect(screen.queryByText(/Hello/i)).toBeNull();

    // TEST LINK
    const mainLink = screen.getByTestId("main");
    const aboutLink = screen.getByTestId("about");
    const formLink = screen.getByTestId("form");
    userEvent.click(mainLink);
    expect(screen.getByTestId("main")).toBeInTheDocument();
    userEvent.click(aboutLink);
    expect(screen.getByTestId("aboutPage")).toBeInTheDocument();
    userEvent.click(formLink);
    expect(screen.getByTestId("formPage")).toBeInTheDocument();
  });
  it("error page test", () => {
    render(
      <MemoryRouter initialEntries={["/testrout"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId("notFoundPage")).toBeInTheDocument();
  });
});

interface IObjectKeys {
  [key: string]: string | number;
}

const mock = () => {
  let storage = {} as IObjectKeys;
  return {
    getItem: (key: string) => (key in storage ? storage[key] : null),
    setItem: (key: string | number, value: string) =>
      (storage[key] = value || ""),
    removeItem: (key: string | number) => delete storage[key],
    clear: () => (storage = {}),
  };
};

Object.defineProperty(window, "localStorage", { value: mock() });
Object.defineProperty(window, "sessionStorage", { value: mock() });
Object.defineProperty(window, "getComputedStyle", {
  value: () => ["-webkit-appearance"],
});

describe("storage", () => {
  beforeAll(() => {
    Object.defineProperty(window, "localStorage", {
      value: mock(),
    });
  });

  it("saves the key to the storage", () => {
    window.localStorage.setItem("the-key", "fake-value");
    expect(window.localStorage.getItem("the-key")).toEqual("fake-value");
  });
});
