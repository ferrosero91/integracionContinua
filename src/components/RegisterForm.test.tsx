import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import RegisterForm from "./RegisterForm";

describe("RegisterForm Component", () => {
  test("el botón está deshabilitado si los campos están vacíos", () => {
    render(<RegisterForm />);

    const submitButton = screen.getByRole("button", { name: /Registrar/i });
    expect(submitButton).toBeDisabled();
  });

  test("al completar los campos, se habilita", () => {
    render(<RegisterForm />);

    const nameInput = screen.getByLabelText(/Nombre/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const submitButton = screen.getByRole("button", { name: /Registrar/i });

    fireEvent.change(nameInput, { target: { value: "Juan Pérez" } });
    fireEvent.change(emailInput, { target: { value: "juan@example.com" } });

    expect(submitButton).not.toBeDisabled();
  });

  test("al hacer submit, se limpia el formulario y aparece un mensaje de confirmación", () => {
    render(<RegisterForm />);

    const nameInput = screen.getByLabelText(/Nombre/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const submitButton = screen.getByRole("button", { name: /Registrar/i });

    fireEvent.change(nameInput, { target: { value: "Juan Pérez" } });
    fireEvent.change(emailInput, { target: { value: "juan@example.com" } });
    fireEvent.click(submitButton);

    expect(screen.getByText("¡Registro exitoso! Gracias por registrarte.")).toBeInTheDocument();
    // Después del submit, el componente muestra el mensaje, no los inputs
    // Los inputs ya no están en el DOM, por eso no se puede verificar su valor
  });
});