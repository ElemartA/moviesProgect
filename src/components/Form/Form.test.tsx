import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Form from "./Form";

describe("Form", () => {
  it("renders Form component", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Form />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
    screen.debug();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeDisabled();
    expect(screen.queryByText(/Имя/i)).toBeInTheDocument();
    expect(screen.queryByText(/Страна:/i)).toBeInTheDocument();
    expect(screen.queryByText(/Главная/i)).toBeNull();

    const btn = screen.getByText(/Отправить/i);
    expect(btn).toBeDisabled();
    const input = screen.getByTestId("name");
    fireEvent.input(input);
    fireEvent.click(btn);
  });
  it("INPUT EVENT", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Form />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
    screen.debug();
    const input = screen.getByTestId("name");
    const inputDate = screen.getByTestId("date");
    expect(input).toContainHTML("");
    expect(inputDate).toContainHTML("");
    fireEvent.input(input, {
      target: { value: "тестовая строка" },
    });
    expect(input).toHaveValue("тестовая строка");
  });
});
