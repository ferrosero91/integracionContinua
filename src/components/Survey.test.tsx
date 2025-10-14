import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Survey from "./Survey";

describe("Survey Component", () => {
  test("se renderizan las 5 opciones", () => {
    render(<Survey />);

    for (let i = 1; i <= 5; i++) {
      expect(screen.getByLabelText(`${i} estrella${i !== 1 ? "s" : ""}`)).toBeInTheDocument();
    }
  });

  test("al seleccionar un valor, se refleja en el estado", () => {
    render(<Survey />);

    const radio3 = screen.getByLabelText("3 estrellas");
    fireEvent.click(radio3);

    expect(radio3).toBeChecked();
  });

  test("al enviar, aparece un mensaje de confirmación con la puntuación", () => {
    render(<Survey />);

    const radio4 = screen.getByLabelText("4 estrellas");
    fireEvent.click(radio4);

    const submitButton = screen.getByRole("button", { name: /Enviar/i });
    fireEvent.click(submitButton);

    expect(screen.getByText(/¡Gracias! Tu puntuación es:/)).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
  });
});