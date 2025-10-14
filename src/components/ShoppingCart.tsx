import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Producto A", price: 10 },
  { id: 2, name: "Producto B", price: 20 },
  { id: 3, name: "Producto C", price: 30 },
];

export default function ShoppingCart() {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-4 p-6">
      <h1 className="text-2xl font-bold">Carrito de Compras</h1>
      <div className="w-full max-w-md">
        <h2 className="text-lg font-semibold mb-2">Productos Disponibles</h2>
        <ul className="space-y-2">
          {products.map(product => (
            <li key={product.id} className="flex justify-between items-center">
              <span>{product.name} - ${product.price}</span>
              <button
                onClick={() => addToCart(product)}
                className="px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Agregar
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full max-w-md">
        <h2 className="text-lg font-semibold mb-2">Carrito</h2>
        {cart.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <ul className="space-y-2">
            {cart.map(item => (
              <li key={`${item.id}-${Math.random()}`} className="flex justify-between items-center">
                <span>{item.name} - ${item.price}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}
        <p className="mt-4 font-bold">Total: ${total}</p>
      </div>
    </div>
  );
}