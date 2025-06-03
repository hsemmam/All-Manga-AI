import React from "react";

export default function HomePage({ onNext }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-purple-200 text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Bienvenue sur All-Manga-AI</h1>
      <p className="mb-8 text-lg max-w-xl">
        Crée ton propre manga en décrivant une idée, en personnalisant les personnages
        et en laissant l’intelligence artificielle générer l’histoire pour toi.
      </p>
      <button
        onClick={onNext}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Commencer
      </button>
    </div>
  );
}

  