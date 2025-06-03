import React, { useState } from "react";

export default function IdeaForm({ onSubmit }) {
  const [idea, setIdea] = useState("");
  const [theme, setTheme] = useState("fun");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ idea, theme }); // on passe un objet complet
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 p-6">
      <h2 className="text-3xl font-bold mb-4">Étape 1 : Ton idée principale</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-4">
        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Décris ici ton idée de base pour le manga..."
          className="w-full p-4 border border-gray-300 rounded-lg"
          rows={5}
          required
        />
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <label className="font-medium">Ambiance :</label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="border border-gray-300 rounded-lg p-2"
          >
            <option value="fun">🎉 Fun</option>
            <option value="sad">😢 Triste</option>
            <option value="epic">⚔️ Épique</option>
            <option value="mysterious">🕵️ Mystérieux</option>
          </select>
        </div>
        <div className="flex justify-end">
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





