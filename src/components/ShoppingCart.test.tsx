import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ShoppingCart from "./ShoppingCart";

describe("ShoppingCart Component", () => {
  test("el carrito inicia vacío", () => {
    render(<ShoppingCart />);

    expect(screen.getByText("El carrito está vacío")).toBeInTheDocument();
    expect(screen.getByText("Total: $0")).toBeInTheDocument();
  });

  test("al agregar un producto, aumenta el total", () => {
    render(<ShoppingCart />);

    const addButton = screen.getAllByRole("button", { name: /Agregar/i })[0];
    fireEvent.click(addButton);

    expect(screen.queryByText("El carrito está vacío")).not.toBeInTheDocument();
    expect(screen.getAllByText("Producto A - $10")).toHaveLength(2); // Uno en productos disponibles, uno en carrito
    expect(screen.getByText("Total: $10")).toBeInTheDocument();
  });

  test("eliminar un producto actualiza el total", () => {
    render(<ShoppingCart />);

    const addButtonA = screen.getAllByRole("button", { name: /Agregar/i })[0];
    const addButtonB = screen.getAllByRole("button", { name: /Agregar/i })[1];

    fireEvent.click(addButtonA);
    fireEvent.click(addButtonB);

    expect(screen.getByText("Total: $30")).toBeInTheDocument();

    const removeButton = screen.getAllByRole("button", { name: /Eliminar/i })[0];
    fireEvent.click(removeButton);

    expect(screen.getByText("Total: $20")).toBeInTheDocument();
  });

  test("se calcula el precio total correctamente", () => {
    render(<ShoppingCart />);

    const addButtonA = screen.getAllByRole("button", { name: /Agregar/i })[0];
    const addButtonB = screen.getAllByRole("button", { name: /Agregar/i })[1];
    const addButtonC = screen.getAllByRole("button", { name: /Agregar/i })[2];

    fireEvent.click(addButtonA);
    fireEvent.click(addButtonB);
    fireEvent.click(addButtonC);

    expect(screen.getByText("Total: $60")).toBeInTheDocument();
  });
});