import React, { useState } from "react";

export default function HeroForm({ onNext, onBack, setHeroData }) {
  const [name, setName] = useState("");
  const [personality, setPersonality] = useState("courageux");

  const handleSubmit = (e) => {
    e.preventDefault();
    setHeroData({ name, personality });
    onNext();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 p-6">
      <h2 className="text-3xl font-bold mb-4">Étape 2 : Ton héros</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nom de ton héros"
          className="w-full p-4 border border-gray-300 rounded-lg"
          required
        />
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <label className="font-medium">Personnalité :</label>
          <select
            value={personality}
            onChange={(e) => setPersonality(e.target.value)}
            className="border border-gray-300 rounded-lg p-2"
          >
            <option value="courageux">🦁 Courageux</option>
            <option value="malicieux">🦊 Malicieux</option>
            <option value="timide">🐭 Timide</option>
            <option value="sombre">🦇 Sombre</option>
          </select>
        </div>
        <div className="flex justify-between">
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


