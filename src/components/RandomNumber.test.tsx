import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import RandomNumber from "./RandomNumber";

describe("RandomNumber Component", () => {
  test("muestra el número después de hacer clic", () => {
    render(<RandomNumber />);

    const button = screen.getByRole("button", { name: /Generar Número/i });
    expect(screen.queryByText(/Número generado:/)).not.toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByText(/Número generado:/)).toBeInTheDocument();
  });

  test("el valor está dentro del rango [1,100]", () => {
    render(<RandomNumber />);

    const button = screen.getByRole("button", { name: /Generar Número/i });

    for (let i = 0; i < 10; i++) {
      fireEvent.click(button);
      const numberText = screen.getByText(/Número generado:/).textContent;
      const number = parseInt(numberText!.split(": ")[1], 10);
      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThanOrEqual(100);
    }
  });

  test("cada clic genera un nuevo número distinto", () => {
    render(<RandomNumber />);

    const button = screen.getByRole("button", { name: /Generar Número/i });

    fireEvent.click(button);
    const firstNumberText = screen.getByText(/Número generado:/).textContent;
    const firstNumber = parseInt(firstNumberText!.split(": ")[1], 10);

    fireEvent.click(button);
    const secondNumberText = screen.getByText(/Número generado:/).textContent;
    const secondNumber = parseInt(secondNumberText!.split(": ")[1], 10);

    expect(firstNumber).not.toBe(secondNumber);
  });
});