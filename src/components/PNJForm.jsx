import React, { useState } from "react";

export default function PNJForm({ onNext, onBack, setPNJData }) {
  const [pnjs, setPnjs] = useState([{ name: "", role: "ami" }]);

  const handleChange = (index, field, value) => {
    const updated = [...pnjs];
    updated[index][field] = value;
    setPnjs(updated);
  };

  const handleAddPNJ = () => {
    if (pnjs.length < 5) {
      setPnjs([...pnjs, { name: "", role: "ami" }]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPNJData(pnjs);
    onNext();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 p-6">
      <h2 className="text-3xl font-bold mb-4">Étape 3 : Personnages secondaires (PNJ)</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-4">
        {pnjs.map((pnj, index) => (
          <div key={index} className="border p-4 rounded-lg bg-gray-50 space-y-2">
            <h4 className="font-semibold">PNJ {index + 1}</h4>
            <input
              type="text"
              value={pnj.name}
              onChange={(e) => handleChange(index, "name", e.target.value)}
              placeholder="Nom du PNJ"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <select
              value={pnj.role}
              onChange={(e) => handleChange(index, "role", e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
            >
              <option value="ami">👫 Ami</option>
              <option value="rival">⚔️ Rival</option>
              <option value="mentor">🧙 Mentor</option>
              <option value="ennemi">👹 Ennemi</option>
            </select>
          </div>
        ))}

        {pnjs.length < 5 && (
          <button
            type="button"
            onClick={handleAddPNJ}
            className="mt-2 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
          >
            ➕ Ajouter un autre PNJ
          </button>
        )}

        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={onBack}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
          >
            Retour
          </button>
          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            Suivant
          </button>
        </div>
      </form>
    </div>
  );
}




