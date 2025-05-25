# All-Manga-AI
Application IA gratuite pour créer ton propre manga
All-Manga-AI/
├─ public/
│  └─ index.html
├─ src/
│  ├─ components/
│  │  ├─ HeroForm.jsx
│  │  ├─ PNJForm.jsx
│  │  └─ HomePage.jsx
│  ├─ App.jsx
│  └─ main.jsx
├─ index.css
├─ tailwind.config.js
├─ postcss.config.js
├─ vite.config.js
├─ package.json
└─ README.md
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>All Manga AI</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
import { useState } from 'react'
import HomePage from './components/HomePage'
import HeroForm from './components/HeroForm'
import PNJForm from './components/PNJForm'

export default function App() {
  const [step, setStep] = useState(0)
  const [hero, setHero] = useState(null)
  const [pnjs, setPnjs] = useState([])

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {step === 0 && <HomePage onStart={() => setStep(1)} />}
      {step === 1 && <HeroForm onNext={(data) => { setHero(data); setStep(2); }} />}
      {step === 2 && <PNJForm onNext={(data) => { setPnjs(data); setStep(3); }} />}
      {step === 3 && (
        <div className="text-white">
          <h2 className="text-2xl font-bold mb-4">Résumé</h2>
          <pre>{JSON.stringify({ hero, pnjs }, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}
export default function HomePage({ onStart }) {
  return (
    <div className="text-white text-center mt-20">
      <h1 className="text-4xl font-bold mb-2">Crée ton aventure manga</h1>
      <p className="mb-4">Choisis ton héros et ses alliés, et laisse l’IA écrire ton histoire !</p>
      <button onClick={onStart} className="bg-purple-600 px-4 py-2 rounded">Commencer</button>
    </div>
  )
}
import { useState } from 'react'

export default function HeroForm({ onNext }) {
  const [form, setForm] = useState({
    name: '',
    gender: '',
    clan: '',
    power: '',
    combatStyle: '',
    traits: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-4">Créer ton héros</h2>
      <form className="grid gap-2">
        {Object.keys(form).map((key) => (
          <input
            key={key}
            type="text"
            name={key}
            placeholder={key}
            value={form[key]}
            onChange={handleChange}
            className="bg-gray-800 p-2 rounded"
          />
        ))}
        <button type="button" onClick={() => onNext(form)} className="bg-green-600 px-4 py-2 rounded">
          Suivant
        </button>
      </form>
    </div>
  )
}
import { useState } from 'react'

export default function PNJForm({ onNext }) {
  const [pnjs, setPnjs] = useState([{ name: '', role: '', link: '', power: '', look: '' }])

  const handleChange = (i, e) => {
    const newPnjs = [...pnjs]
    newPnjs[i][e.target.name] = e.target.value
    setPnjs(newPnjs)
  }

  const addPNJ = () => {
    if (pnjs.length < 5) setPnjs([...pnjs, { name: '', role: '', link: '', power: '', look: '' }])
  }

  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-4">Ajouter des PNJ</h2>
      {pnjs.map((pnj, i) => (
        <div key={i} className="grid gap-1 mb-4">
          {Object.keys(pnj).map((key) => (
            <input
              key={key}
              type="text"
              name={key}
              placeholder={`${key} (PNJ ${i + 1})`}
              value={pnj[key]}
              onChange={(e) => handleChange(i, e)}
              className="bg-gray-800 p-2 rounded"
            />
          ))}
        </div>
      ))}
      <button onClick={addPNJ} className="bg-blue-600 px-3 py-1 rounded mr-2">+ Ajouter PNJ</button>
      <button onClick={() => onNext(pnjs)} className="bg-green-600 px-4 py-2 rounded">Valider</button>
    </div>
  )
}
@tailwind base;
@tailwind components;
@tailwind utilities;
body {
  background-color: #0f0f1f;
  font-family: sans-serif;
}
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/All-Manga-AI/',
})
"homepage": "https://hsemmam.github.io/All-Manga-AI",
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "vite build && gh-pages -d dist"
}

