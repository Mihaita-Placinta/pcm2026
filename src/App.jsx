import { useState } from "react";
import { categories } from "./data/quizData";
import LoginScreen from "./LoginScreen.jsx";

// ─── tiny helpers ────────────────────────────────────────────────────────────
const LABELS = ["A", "B", "C", "D"];

// Funcție pentru a verifica dacă utilizatorul a selectat TOATE răspunsurile corecte
function areArraysEqual(arr1, arr2) {
  if (!arr1 || !arr2 || arr1.length !== arr2.length) return false;
  const sorted1 = [...arr1].sort((a, b) => a - b);
  const sorted2 = [...arr2].sort((a, b) => a - b);
  return sorted1.every((val, index) => val === sorted2[index]);
}

// ─── CategorySelect screen ────────────────────────────────────────────────────
function CategorySelect({ onSelect }) {
  return (
    <div className="page category-page">
      <header className="site-header">
        <div className="logo">
          <span className="logo-icon">📚</span>
          <span className="logo-text">PCM 2026</span>
        </div>
        <p className="logo-sub">Alege un capitol și testează-ți cunoștințele!</p>
      </header>

      <div className="category-grid">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className="cat-card"
            style={{ "--accent": cat.color }}
            onClick={() => onSelect(cat)}
          >
            <span className="cat-icon">{cat.icon}</span>
            <div className="cat-info">
              <h2 className="cat-title">{cat.title}</h2>
              <p className="cat-desc">{cat.description}</p>
              <span className="cat-count">{cat.questions.length} întrebări</span>
            </div>
            <span className="cat-arrow">→</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Quiz screen ──────────────────────────────────────────────────────────────
function QuizScreen({ category, onFinish }) {
  const questions = category.questions;
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState([]);        // Array de indexuri [0, 2]
  const [confirmed, setConfirmed] = useState(false);    
  const [answers, setAnswers] = useState([]);            

  const q = questions[current];
  const isLast = current === questions.length - 1;
  const progress = (current / questions.length) * 100;

  function choose(idx) {
    if (confirmed) return;
    
    if (selected.includes(idx)) {
      setSelected(selected.filter((item) => item !== idx));
    } else {
      setSelected([...selected, idx]);
    }
  }

  function verify() {
    if (selected.length === 0) return;
    setConfirmed(true);
  }

  function next() {
    const newAnswers = [...answers, { chosen: selected, correct: q.correct }];
    if (isLast) {
      onFinish(newAnswers, questions);
    } else {
      setAnswers(newAnswers);
      setCurrent(current + 1);
      setSelected([]); 
      setConfirmed(false);
    }
  }

  function optionClass(idx) {
    const isSelected = selected.includes(idx);
    const isCorrectOption = q.correct.includes(idx);

    if (!confirmed) return isSelected ? "opt selected" : "opt";

    if (isSelected && isCorrectOption) return "opt correct";      // Bifat și corect
    if (isSelected && !isCorrectOption) return "opt wrong";       // Bifat și greșit
    if (!isSelected && isCorrectOption) return "opt omitted";     // Trebuia bifat, dar a fost omis
    return "opt";                                                 // Nebifat și greșit
  }

  return (
    <div className="page quiz-page">
      <div className="quiz-topbar">
        <span className="quiz-cat-label" style={{ color: category.color }}>
          {category.icon} {category.title}
        </span>
        <span className="quiz-counter">
          {current + 1} / {questions.length}
        </span>
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${progress}%`, background: category.color }}
        />
      </div>

      <div className="question-card">
        <p className="question-text">{q.question}</p>
        <small className="quiz-hint">
          💡 Răspuns multiplu. Selectează toate variantele pe care le consideri corecte.
        </small>

        <div className="options-list">
          {q.options.map((opt, idx) => {
            const isSelected = selected.includes(idx);
            const isCorrectOption = q.correct.includes(idx);

            return (
              <button
                key={idx}
                className={optionClass(idx)}
                onClick={() => choose(idx)}
              >
                <span className="opt-label">{LABELS[idx]}</span>
                <span className="opt-text">{opt}</span>
                
                {confirmed && isCorrectOption && isSelected && (
                  <span className="opt-badge correct-badge">✓ Corect</span>
                )}
                {confirmed && !isCorrectOption && isSelected && (
                  <span className="opt-badge wrong-badge">✗ Greșit</span>
                )}
                {confirmed && isCorrectOption && !isSelected && (
                  <span className="opt-badge omitted-badge">⚠ Ai omis</span>
                )}
              </button>
            );
          })}
        </div>

        {confirmed && (
          <div className="explanation">
            <span className="expl-icon">💡</span>
            <p>{q.explanation}</p>
          </div>
        )}
      </div>

      <div className="quiz-actions">
        {!confirmed ? (
          <button
            className="btn btn-primary"
            disabled={selected.length === 0}
            onClick={verify}
            style={{ "--btn-color": category.color }}
          >
            Verifică răspunsul
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={next}
            style={{ "--btn-color": category.color }}
          >
            {isLast ? "Vezi rezultatele" : "Întrebarea următoare →"}
          </button>
        )}
      </div>
    </div>
  );
}

// ─── Results screen ───────────────────────────────────────────────────────────
function ResultsScreen({ answers, questions, category, onRestart, onHome }) {
  const [tab, setTab] = useState("all");

  const score = answers.filter((a) => areArraysEqual(a.chosen, a.correct)).length;
  const total = questions.length;
  const pct = Math.round((score / total) * 100);

  const wrongAnswers = answers.filter((a) => !areArraysEqual(a.chosen, a.correct));
  const displayList = tab === "all" ? answers : wrongAnswers;

  function gradeLabel() {
    if (pct === 100) return { text: "Perfect! 🏆", cls: "grade-perfect" };
    if (pct >= 70) return { text: "Bine! 👍", cls: "grade-good" };
    if (pct >= 40) return { text: "Acceptabil 😐", cls: "grade-ok" };
    return { text: "Mai încearcă 💪", cls: "grade-poor" };
  }

  const grade = gradeLabel();

  return (
    <div className="page results-page">
      <div className="score-card">
        <div className="score-circle" style={{ "--cat-color": category.color }}>
          <span className="score-num">{score}</span>
          <span className="score-sep">/</span>
          <span className="score-total">{total}</span>
        </div>
        <div className={`grade-badge ${grade.cls}`}>{grade.text}</div>
        <p className="score-pct">{pct}% răspunsuri corecte la teste</p>
      </div>

      <div className="tabs">
        <button
          className={`tab ${tab === "all" ? "tab-active" : ""}`}
          onClick={() => setTab("all")}
          style={{ "--tab-color": category.color }}
        >
          Toate ({total})
        </button>
        <button
          className={`tab ${tab === "wrong" ? "tab-active" : ""}`}
          onClick={() => setTab("wrong")}
          style={{ "--tab-color": category.color }}
        >
          Greșite ({wrongAnswers.length})
        </button>
      </div>

      <div className="review-list">
        {displayList.length === 0 && tab === "wrong" && (
          <div className="empty-state">🎉 Nicio greșeală! Toate sunt perfecte.</div>
        )}
        
        {displayList.map((ans, i) => {
          const qIdx = tab === "all" ? i : answers.indexOf(ans);
          const q = questions[qIdx];
          const isCorrect = areArraysEqual(ans.chosen, ans.correct);

          return (
            <div key={i} className={`review-card ${isCorrect ? "rc-correct" : "rc-wrong"}`}>
              <div className="rc-header">
                <span className={`rc-badge ${isCorrect ? "rc-badge-ok" : "rc-badge-err"}`}>
                  {isCorrect ? "✓" : "✗"}
                </span>
                <span className="rc-qnum">Întrebarea {qIdx + 1}</span>
              </div>
              <p className="rc-question">{q.question}</p>
              
              <div className="rc-answers">
                <div className={`rc-answer ${isCorrect ? "rc-ans-correct" : "rc-ans-wrong"}`}>
                  <strong>Răspunsul tău:</strong>{" "}
                  {ans.chosen.length > 0 ? (
                    <div className="review-chosen-items">
                      {[...ans.chosen].sort((a,b)=>a-b).map(idx => (
                        <div key={idx} className="answer-line">
                          <span className="inline-letter">{LABELS[idx]}.</span> {q.options[idx]}
                        </div>
                      ))}
                    </div>
                  ) : (
                    "Niciunul selectat"
                  )}
                </div>

                {!isCorrect && (
                  <div className="rc-answer rc-ans-correct" style={{ marginTop: "10px" }}>
                    <strong>Răspuns corect:</strong>{" "}
                    <div className="review-correct-items">
                      {[...q.correct].sort((a,b)=>a-b).map(idx => (
                        <div key={idx} className="answer-line">
                          <span className="inline-letter">{LABELS[idx]}.</span> {q.options[idx]}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <p className="rc-explanation">💡 {q.explanation}</p>
            </div>
          );
        })}
      </div>

      <div className="results-actions">
        <button
          className="btn btn-primary"
          onClick={onRestart}
          style={{ "--btn-color": category.color }}
        >
          🔄 Reia testul
        </button>
        <button className="btn btn-ghost" onClick={onHome}>
          ← Alege alt capitol
        </button>
      </div>
    </div>
  );
}

// ─── Root App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState("home"); 
  const [activeCategory, setActiveCategory] = useState(null);
  const [finalAnswers, setFinalAnswers] = useState([]);
  
  // Soluția pentru stările de Login, mutate în interiorul componentei
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  function login() {
    if (username === "pcm2026" && password === "amluatexamenul") {
      setAuthenticated(true);
    } else {
      alert("Utilizator sau parolă incorectă!");
    }
  }

  function startQuiz(cat) {
    setActiveCategory(cat);
    setScreen("quiz");
  }

  function finishQuiz(answers) {
    setFinalAnswers(answers);
    setScreen("results");
  }

  function restartQuiz() {
    setFinalAnswers([]);
    setScreen("quiz");
  }

  function goHome() {
    setActiveCategory(null);
    setFinalAnswers([]);
    setScreen("home");
  }

  if (!authenticated) {
    return (
      <LoginScreen
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        onLogin={login}
      />
    );
  }

  return (
    <>
      {screen === "home" && <CategorySelect onSelect={startQuiz} />}

      {screen === "quiz" && activeCategory && (
        <QuizScreen
          category={activeCategory}
          onFinish={finishQuiz}
        />
      )}

      {screen === "results" && (
        <ResultsScreen
          answers={finalAnswers}
          questions={activeCategory.questions}
          category={activeCategory}
          onRestart={restartQuiz}
          onHome={goHome}
        />
      )}
    </>
  );
}