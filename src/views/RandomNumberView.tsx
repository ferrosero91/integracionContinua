import RandomNumber from "../components/RandomNumber";

export default function RandomNumberView() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Generador de Números Aleatorios</h1>
        <RandomNumber />
      </div>
    </div>
  );
}