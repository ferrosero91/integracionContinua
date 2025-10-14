import { useState } from "react";

export default function RandomNumber() {
  const [number, setNumber] = useState<number | null>(null);

  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNum);
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-4 p-6">
      <h1 className="text-2xl font-bold">Generador de Números Aleatorios</h1>
      <button
        onClick={generateRandomNumber}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
      >
        Generar Número
      </button>
      {number !== null && (
        <p className="text-lg">Número generado: <span className="font-bold">{number}</span></p>
      )}
    </div>
  );
}