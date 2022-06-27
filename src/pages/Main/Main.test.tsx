import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";
import axios from "axios";

Object.defineProperty(window, "MutationObserver", {
  writable: false,
  configurable: false,
  value: MutationObserver,
});

jest.mock("axios");

describe("Main", () => {
  it("renders Main component", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
    screen.debug();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.queryByText(/Главная/i)).toBeNull();
  });
});

// const getData = async () => {
//   try {
//     const response = await axios.get(
//       `https://kinopoiskapiunofficial.tech/api/v2.2/films/?type=ALL&order=RATING&keyword=человек&page=1`,
//       {
//         headers: {
//           "X-API-KEY": "52b4d23c-d7de-44dc-8d97-4d0bbe579e7c",
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     const years: number[] = response.data.items.map(
//       (item: { year: number }) => item.year
//     );
//     return years;
//   } catch (err) {
//     console.error(err);
//   }
// };

describe("api test", () => {
  let response: {
    data: {
      items: [
        {
          year: string;
          nameRu: string;
        },
        {
          year: string;
          nameRu: string;
        }
      ];
    };
  };
  beforeEach(() => {
    response = {
      data: {
        items: [
          {
            year: "2020",
            nameRu: "Жизнь человека. Последнее интервью",
          },
          {
            year: "2015",
            nameRu: "Человек",
          },
        ],
      },
    };
  });
  it("тест компонента с асинхронной загрузкой данных с сервера", async () => {
    (axios.get as jest.Mock).mockReturnValue(response);
    render(<Main />);

    const authors = await screen.findAllByTestId("year-id");
    expect(authors.length).toBe(2);
    expect(axios.get).toBeCalledTimes(2);
    screen.debug();
  });
});
