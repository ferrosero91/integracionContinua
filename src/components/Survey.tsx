import { useState } from "react";

export default function Survey() {
  const [rating, setRating] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating !== null) {
      setSubmitted(true);
    }
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-4 p-6">
      <h1 className="text-2xl font-bold">Encuesta de Satisfacción</h1>
      {!submitted ? (
        <>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <label key={star} className="flex items-center gap-1">
                <input
                  type="radio"
                  name="rating"
                  value={star}
                  checked={rating === star}
                  onChange={() => setRating(star)}
                  className="mr-1"
                />
                {star} estrella{star !== 1 ? "s" : ""}
              </label>
            ))}
          </div>
          <button
            onClick={handleSubmit}
            disabled={rating === null}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 disabled:bg-gray-400"
          >
            Enviar
          </button>
        </>
      ) : (
        <p className="text-lg">¡Gracias! Tu puntuación es: <span className="font-bold">{rating}</span> estrella{rating !== 1 ? "s" : ""}</p>
      )}
    </div>
  );
}