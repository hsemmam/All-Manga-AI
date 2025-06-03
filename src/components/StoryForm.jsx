import React, { useState } from "react";

export default function StoryForm({ onBack, onGenerateStory }) {
  const [mood, setMood] = useState("neutre");

  const handleClick = () => {
    // onGenerateStory ne fait plus qu’un appel unique dans App.jsx
    onGenerateStory(mood);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 p-6">
      <h2 className="text-3xl font-bold mb-4">Étape 4 : Génération de l'histoire</h2>

      <div className="mb-4 w-full max-w-md">
        <label className="block font-semibold mb-2">Ambiance de l’histoire :</label>
        <select
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2"
        >
          <option value="neutre">Neutre</option>
          <option value="dramatique">😭 Dramatique</option>
          <option value="comique">😂 Comique</option>
          <option value="épique">🔥 Épique</option>
          <option value="romantique">💕 Romantique</option>
        </select>
      </div>

      <div className="flex justify-between w-full max-w-md mt-4">
        <button
          onClick={onBack}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
        >
          Retour
        </button>
        <button
          onClick={handleClick}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Générer l’histoire
        </button>
      </div>
    </div>
  );
}


