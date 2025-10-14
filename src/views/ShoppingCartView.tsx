import ShoppingCart from "../components/ShoppingCart";

export default function ShoppingCartView() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Carrito de Compras</h1>
        <ShoppingCart />
      </div>
    </div>
  );
}