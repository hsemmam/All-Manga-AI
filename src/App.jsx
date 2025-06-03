import React, { useState } from "react";
import IdeaForm from "./components/IdeaForm";
import HeroForm from "./components/HeroForm";
import PNJForm from "./components/PNJForm";
import StoryForm from "./components/StoryForm";
import LoadingScreen from "./components/LoadingScreen";
import StoryViewer from "./components/StoryViewer";

export default function App() {
  const [step, setStep] = useState(0);

  const [ideaData, setIdeaData] = useState({ idea: "", theme: "" });
  const [heroData, setHeroData] = useState({ name: "", personality: "" });
  const [pnjData, setPNJData] = useState([]);
  const [story, setStory] = useState("");


  const handleRestart = () => {
    setIdeaData({ idea: "", theme: "" });
    setHeroData({ name: "", personality: "" });
    setPNJData([]);
    setStory("");
    setStep(0);
  };

  const handleGenerateStory = async () => {
      setStep(4);

    const formattedPNJ = pnjData
      .map((pnj, i) => `${i + 1}. ${pnj.name} (${pnj.role})`)
      .join("\n");

    const prompt = `Crée une histoire de manga à partir de :
- Idée : ${ideaData.idea}
- Ambiance : ${ideaData.theme}
- Héros : ${heroData.name}, personnalité : ${heroData.personality}
- PNJ :
${formattedPNJ}`;

    try {
      const response = await fetch("https://<TON-SITE-VERCEL>.vercel.app/api/generate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ prompt }),
});


      const data = await response.json();
      console.log("Réponse brute de l’API :", data);

      const generatedText = data?.[0]?.generated_text || "Erreur lors de la génération.";
      setStory(generatedText);
      setStep(5);
    } catch (error) {
      console.error("Erreur HuggingFace :", error);
      setStory("Une erreur est survenue pendant la génération.");
      setStep(5);
    } finally {
    }
  };

  return (
    <>
      {step === 0 && <IdeaForm onSubmit={(data) => { setIdeaData(data); setStep(1); }} />}
      {step === 1 && (
        <HeroForm
          onNext={() => setStep(2)}
          onBack={() => setStep(0)}
          setHeroData={setHeroData}
        />
      )}
      {step === 2 && (
        <PNJForm
          onNext={() => setStep(3)}
          onBack={() => setStep(1)}
          setPNJData={setPNJData}
        />
      )}
      {step === 3 && (
        <StoryForm
          ideaData={ideaData}
          heroData={heroData}
          pnjData={pnjData}
          onBack={() => setStep(2)}
          onGenerateStory={handleGenerateStory}
        />
      )}
      {step === 4 && <LoadingScreen />}
      {step === 5 && <StoryViewer story={story} onRestart={handleRestart} />}
    </>
  );
}










