import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../../components/counter/counter";

describe("Test counter component", () => {
  it("should render counter initial state", () => {
    render(<Counter />);
    expect(screen.getByText("Counter")).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("should test counter value increase and decrease", () => {
    render(<Counter />);
    const plusBtn = screen.getByRole("button", { name: "+" });
    expect(plusBtn).toBeInTheDocument();

    const minusBtn = screen.getByRole("button", { name: "-" });
    expect(minusBtn).toBeInTheDocument();

    fireEvent.click(plusBtn);
    expect(screen.getByText("1")).toBeInTheDocument();

    fireEvent.click(plusBtn);
    fireEvent.click(plusBtn);
    expect(screen.getByText("3")).toBeInTheDocument();
  });
});
