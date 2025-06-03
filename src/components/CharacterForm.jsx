import { useState } from 'react'

export default function CharacterForm({ onNext, nextStep }) {
  const [characters, setCharacters] = useState([{ name: '', role: '', ability: '' }])

  const handleChange = (i, e) => {
    const newChars = [...characters]
    newChars[i][e.target.name] = e.target.value
    setCharacters(newChars)
  }

  const addCharacter = () => {
    if (characters.length < 5)
      setCharacters([...characters, { name: '', role: '', ability: '' }])
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Tes personnages principaux</h2>
      {characters.map((char, i) => (
        <div key={i} className="mb-2">
          <input className="bg-gray-800 p-2 mr-2 rounded" type="text" name="name" placeholder="Nom" value={char.name} onChange={(e) => handleChange(i, e)} />
          <input className="bg-gray-800 p-2 mr-2 rounded" type="text" name="role" placeholder="Rôle" value={char.role} onChange={(e) => handleChange(i, e)} />
          <input className="bg-gray-800 p-2 rounded" type="text" name="ability" placeholder="Pouvoir" value={char.ability} onChange={(e) => handleChange(i, e)} />
        </div>
      ))}
      <button className="bg-blue-600 px-3 py-1 rounded mr-2" onClick={addCharacter}>+ Ajouter</button>
      <button className="bg-green-600 px-4 py-2 rounded" onClick={() => { onNext(characters); nextStep() }}>Générer le tome</button>
    </div>
  )
}