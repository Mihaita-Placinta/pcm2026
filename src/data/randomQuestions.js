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

const RANDOM_QUIZ_META = {
  id: "random",
  title: "Random Quiz - 45 Întrebări",
  icon: "🎲",
  color: "#9b59b6",
};

export function generateRandomQuiz() {
  return { ...RANDOM_QUIZ_META, questions: shuffleArray(allQuestions).slice(0, 45) };
}

// Static export for the category grid (questions count display)
const randomQuiz = generateRandomQuiz();

export default randomQuiz;
