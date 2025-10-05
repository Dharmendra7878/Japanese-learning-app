import React, { useState, useEffect } from "react";
import './kana.css';
import { useNavigate } from 'react-router-dom';

const defaultKanjiData = [
  { kanji: "月", onyomi: "getsu", kunyomi: "tsuki", meaning: "moon / month" },
  { kanji: "日", onyomi: "nichi", kunyomi: "hi", meaning: "sun / day" },
  { kanji: "山", onyomi: "san", kunyomi: "yama", meaning: "mountain" },
  { kanji: "水", onyomi: "sui", kunyomi: "mizu", meaning: "water" },
  { kanji: "火", onyomi: "ka", kunyomi: "hi", meaning: "fire" },
];

function App() {
  const [kanjiData, setKanjiData] = useState([]);
  const [current, setCurrent] = useState(0);
  const [onyomiInput, setOnyomiInput] = useState("");
  const [kunyomiInput, setKunyomiInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [showAddPage, setShowAddPage] = useState(false);

  // Form states for adding new Kanji
  const [newKanji, setNewKanji] = useState("");
  const [newOnyomi, setNewOnyomi] = useState("");
  const [newKunyomi, setNewKunyomi] = useState("");
  const [newMeaning, setNewMeaning] = useState("");
  const navigate = useNavigate();


  // Load saved kanji from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("kanjiData");
    if (saved) {
      setKanjiData(JSON.parse(saved));
    } else {
      setKanjiData(defaultKanjiData);
    }
  }, []);

  // Save kanjiData whenever it changes
  useEffect(() => {
    if (kanjiData.length > 0) {
      localStorage.setItem("kanjiData", JSON.stringify(kanjiData));
    }
  }, [kanjiData]);

  const checkAnswer = () => {
    const answerOnyomi = onyomiInput.trim().toLowerCase();
    const answerKunyomi = kunyomiInput.trim().toLowerCase();
    const { onyomi, kunyomi } = kanjiData[current];

    setAttempts((prev) => prev + 1);

    if (answerOnyomi === onyomi && answerKunyomi === kunyomi) {
      setFeedback("✅ Correct!");
      setScore((prev) => prev + 1);
      setTimeout(() => {
        setFeedback("");
        setOnyomiInput("");
        setKunyomiInput("");
        setCurrent((prev) => (prev + 1) % kanjiData.length);
      }, 800);
    } else {
      setFeedback("❌ Wrong! Try again.");
    }
  };

  const handleAddKanji = () => {
    if (!newKanji || !newOnyomi || !newKunyomi || !newMeaning) {
      alert("Please fill all fields!");
      return;
    }
    const newEntry = {
      kanji: newKanji,
      onyomi: newOnyomi.toLowerCase(),
      kunyomi: newKunyomi.toLowerCase(),
      meaning: newMeaning,
    };
    setKanjiData((prev) => [...prev, newEntry]);
    setNewKanji("");
    setNewOnyomi("");
    setNewKunyomi("");
    setNewMeaning("");
    alert("✅ Kanji added successfully!");
  };

  const handleDeleteKanji = (index) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${kanjiData[index].kanji}"?`
    );
    if (!confirmDelete) return;

    const updated = kanjiData.filter((_, i) => i !== index);
    setKanjiData(updated);
    alert("🗑 Kanji deleted!");
    // Reset current index if necessary
    if (current >= updated.length) {
      setCurrent(0);
    }
  };

  return (
    <div className="container">
      <h1>Kanji Quiz</h1>
      <button onClick={() => setShowAddPage(!showAddPage)}>
        {showAddPage ? "⬅ Back to Quiz" : "➕ Add / Manage Kanji"}
      </button>

      {showAddPage ? (
        <div className="add-page">
          <h2>Add New Kanji</h2>
          <input
            type="text"
            placeholder="Kanji"
            value={newKanji}
            onChange={(e) => setNewKanji(e.target.value)}
          />
          <input
            type="text"
            placeholder="On’yomi (e.g. getsu)"
            value={newOnyomi}
            onChange={(e) => setNewOnyomi(e.target.value)}
          />
          <input
            type="text"
            placeholder="Kun’yomi (e.g. tsuki)"
            value={newKunyomi}
            onChange={(e) => setNewKunyomi(e.target.value)}
          />
          <input
            type="text"
            placeholder="Meaning (e.g. moon / month)"
            value={newMeaning}
            onChange={(e) => setNewMeaning(e.target.value)}
          />
          <button onClick={handleAddKanji}>Add Kanji</button>

          <h2>Manage Kanji List</h2>
          <ul className="kanji-list">
            {kanjiData.map((k, index) => (
              <li key={index}>
                <span>
                  {k.kanji} - {k.onyomi} / {k.kunyomi} ({k.meaning})
                </span>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteKanji(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="quiz-area">
          {/* Left Feedback */}
          <div className="left">
            <h2
              className={feedback === "✅ Correct!" ? "correct" : feedback ? "wrong" : ""}
            >
              {feedback}
            </h2>
            <h1>{kanjiData[current]?.kanji}</h1>
            <p>On’yomi: {kanjiData[current]?.onyomi}</p>
            <p>Kun’yomi: {kanjiData[current]?.kunyomi}</p>
            <p>Meaning: {kanjiData[current]?.meaning}</p>
          </div>

          {/* Center Quiz Box */}
          <div className="center">
            <div className="kana-box">{kanjiData[current]?.kanji}</div>
            <input
              type="text"
              value={onyomiInput}
              placeholder="Type On’yomi"
              onChange={(e) => setOnyomiInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && checkAnswer()}
            />
            <input
              type="text"
              value={kunyomiInput}
              placeholder="Type Kun’yomi"
              onChange={(e) => setKunyomiInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && checkAnswer()}
            />
            <button onClick={checkAnswer}>Submit</button>
          </div>

          {/* Right Stats */}
          <div className="right">
            <h3>Progress</h3>
            <p>Score: {score}</p>
            <p>Attempts: {attempts}</p>
            <p>
              Accuracy:{" "}
              {attempts > 0 ? ((score / attempts) * 100).toFixed(1) + "%" : "0%"}
            </p>
          </div>
        </div>
        
      )}
      <button onClick={() => navigate('/')} className="back-button">⬅ Back to Home</button>
    </div>
  );
}

export default App;
