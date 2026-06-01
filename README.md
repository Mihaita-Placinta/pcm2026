# EduQuiz App

Aplicație React de tip quiz pe capitole, inspirată din EduBoom.

## Pornire rapidă

```bash
cd quiz-app
npm install
npm run dev
```

Apoi deschide http://localhost:5173 în browser.

## Structura fișierelor

```
quiz-app/
├── src/
│   ├── data/
│   │   └── quizData.js    ← JSON-urile cu categorii și întrebări
│   ├── App.jsx            ← Componentele React (CategorySelect, QuizScreen, ResultsScreen)
│   ├── App.css            ← Stiluri
│   └── main.jsx           ← Entry point
├── index.html
├── package.json
└── vite.config.js
```

## Cum adaugi o categorie nouă

Deschide `src/data/quizData.js` și adaugă un obiect nou în array-ul `categories`:

```js
{
  id: "matematica",
  title: "Matematică",
  icon: "🧮",
  description: "Algebra și geometrie",
  color: "#7c3aed",
  questions: [
    {
      id: 1,
      question: "Cât face 2²?",
      options: ["2", "4", "6", "8"],
      correct: 1,           // index 0-based al răspunsului corect
      explanation: "2 la puterea 2 înseamnă 2×2 = 4."
    }
  ]
}
```

## Funcționalități

- ✅ Selectare capitol la start
- ✅ Bară de progres în timp ce răspunzi
- ✅ Feedback imediat după fiecare răspuns (verde/roșu + explicație)
- ✅ Ecran de rezultate cu scor și procent
- ✅ Tab-uri „Toate" / „Greșite" pentru review la final
- ✅ Buton „Reia testul" sau „Alege alt capitol"
