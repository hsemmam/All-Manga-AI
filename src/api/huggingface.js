export async function generateHuggingFaceStory(idea, characters) {
    const prompt = `
  Tu es un mangaka. Voici une idée : ${idea}
  Et voici les personnages : ${characters.map(c => `${c.name} (${c.role}) avec le pouvoir ${c.ability}`).join(', ')}.
  Écris un synopsis et le premier chapitre avec style et un cliffhanger.`
  
    const response = await fetch("https://api-inference.huggingface.co/models/google/flan-t5-xl", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_HUGGINGFACE_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ inputs: prompt })
    })
  
    const data = await response.json()
    return data?.[0]?.generated_text || "Aucune réponse générée."
  }