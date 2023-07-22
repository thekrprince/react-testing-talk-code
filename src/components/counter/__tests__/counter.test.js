import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CounterProvider, { Counter, CounterContext } from "../CounterContext";

const renderWithContext = (component) => {
  return {
    ...render(
      <CounterProvider value={CounterContext}>{component}</CounterProvider>
    ),
  };
};

describe("Counter App", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    renderWithContext(<Counter />);
  });
  it("checks if initial state is equal to 0", () => {
    expect(screen.getByTestId("counter")).toHaveTextContent("0");
  });

  it("checks if state is increasing upon clicking on Up button", () => {
    const upBtn = screen.getByRole("button", { name: "Up" });
    expect(upBtn).toBeInTheDocument();
    userEvent.click(upBtn);
    expect(screen.getByTestId("counter")).toHaveTextContent("1");
  });

  it("checks if initial state is equal to zer", () => {
    expect(screen.getByTestId("counter")).toHaveTextContent("0");
  });
});
