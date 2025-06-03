// src/api/generateStory.js
export async function generateStory(prompt) {
    const apiKey = import.meta.env.VITE_HF_API_KEY;
  
    const response = await fetch("https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-alpha", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: {
          temperature: 0.7,
          max_new_tokens: 600,
          return_full_text: false
        }
      }),
    });
  
    if (!response.ok) {
      throw new Error("Échec de la génération de l’histoire.");
    }
  
    const result = await response.json();
  
    if (Array.isArray(result) && result[0]?.generated_text) {
      return result[0].generated_text;
    } else {
      throw new Error("Format de réponse inattendu de Hugging Face.");
    }
  }
  