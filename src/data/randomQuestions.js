import biochimie from "./biochimie.js";
import chimieOrganica from "./chimieOrganica.js";
import informaticaAplicata from "./informaticaAplicata.js";
import managementulCalitatii from "./managementulCalitatii.js";
import ecologieMediu from "./ecologieMediu.js";
import microbiologie from "./microbiologie.js";
import metodologia from "./metodologia.js";
import principiisimetode from "./principiisimetode.js";
import sigurantasisecuritate from "./sigurantasisecuritate.js";
import tehnologiaproduselor from "./tehnologiaproduselor.js";

// Collect all questions from all categories
const allQuestions = [
  ...biochimie.questions,
  ...chimieOrganica.questions,
  ...informaticaAplicata.questions,
  ...managementulCalitatii.questions,
  ...ecologieMediu.questions,
  ...microbiologie.questions,
  ...metodologia.questions,
  ...principiisimetode.questions,
  ...sigurantasisecuritate.questions,
  ...tehnologiaproduselor.questions
];

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Shuffle and get first 45 questions
const randomizedQuestions = shuffleArray(allQuestions).slice(0, 45);

const randomQuiz = {
  id: "random",
  title: "Random Quiz - 45 Întrebări",
  icon: "🎲",
  color: "#9b59b6",
  questions: randomizedQuestions
};

export default randomQuiz;
