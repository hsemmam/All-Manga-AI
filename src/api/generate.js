export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Méthode non autorisée" });
    }
  
    const { prompt } = req.body;
  
    try {
      const response = await fetch("https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta", {
        method: "POST",
        headers: {
          Authorization: `Bearer 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`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: prompt }),
      });
  
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error("Erreur Hugging Face :", error);
      res.status(500).json({ error: "Erreur lors de la génération" });
    }
  }  
  