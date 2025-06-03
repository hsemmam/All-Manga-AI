import React from "react";

export default function StoryViewer({ story, onRestart }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 p-6">
      <h2 className="text-3xl font-bold mb-6">📖 Ton manga : Tome 1</h2>
      
      <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 w-full max-w-3xl shadow">
        <p className="whitespace-pre-line leading-relaxed">{story}</p>
      </div>

      <button
        onClick={onRestart}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        🔄 Recommencer
      </button>
    </div>
  );
}



  