import React, { useState, useEffect, useRef } from 'react';
import './date.css';
import { useNavigate } from 'react-router-dom';

const japaneseDates = [
  { kana: 1, romaji: "tsuitachi" },
  { kana: 2, romaji: "futsuka" },
  { kana: 3, romaji: "mikka" },
  { kana: 4, romaji: "yokka" },
  { kana: 5, romaji: "itsuka" },
  { kana: 6, romaji: "muika" },
  { kana: 7, romaji: "nanoka" },
  { kana: 8, romaji: "yoka" },
  { kana: 9, romaji: "kokonoka" },
  { kana: 10, romaji: "toka" },
  { kana: 11, romaji: "juichi-nichi" },
  { kana: 12, romaji: "juni-nichi" },
  { kana: 13, romaji: "jusan-nichi" },
  { kana: 14, romaji: "juyokka" },
  { kana: 15, romaji: "jugo-nichi" },
  { kana: 16, romaji: "juroku-nichi" },
  { kana: 17, romaji: "jushichi-nichi" },
  { kana: 18, romaji: "juhachi-nichi" },
  { kana: 19, romaji: "juku-nichi" },
  { kana: 20, romaji: "hatsuka" },
  { kana: 21, romaji: "nijuichi-nichi" },
  { kana: 22, romaji: "nijuni-nichi" },
  { kana: 23, romaji: "nijusan-nichi" },
  { kana: 24, romaji: "nijuyokka" },
  { kana: 25, romaji: "nijugo-nichi" },
  { kana: 26, romaji: "nijuroku-nichi" },
  { kana: 27, romaji: "nijushichi-nichi" },
  { kana: 28, romaji: "nijuhachi-nichi" },
  { kana: 29, romaji: "nijuku-nichi" },
  { kana: 30, romaji: "sanju-nichi" },
  { kana: 31, romaji: "sanjuichi-nichi" }
];

function App() {
  const [currentKana, setCurrentKana] = useState({});
  const [lastCorrectKana, setLastCorrectKana] = useState(null);
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [correct, setCorrect] = useState(0);
  const [total, setTotal] = useState(0);
  const inputRef = useRef();
   const navigate = useNavigate();

  useEffect(() => {
    generateRandomKana();
    inputRef.current.focus();
  }, []);

  const generateRandomKana = () => {
    const randomKana = japaneseDates[Math.floor(Math.random() * japaneseDates.length)];
    setCurrentKana(randomKana);
    setInput('');
    setFeedback('');
  };

  const handleCheck = () => {
    const answer = input.toLowerCase().trim();
    const isCorrect = answer === currentKana.romaji.toLowerCase();

    setTotal(prev => prev + 1);

    if (isCorrect) {
      setCorrect(prev => prev + 1);
      setFeedback('✅ Correct!');
      setLastCorrectKana(currentKana);
      generateRandomKana();
    } else {
      setFeedback('❌ Wrong! Try again.');
      setLastCorrectKana(null);
      setInput('');
      inputRef.current.focus();
    }
  };

  return (
    <div className="container">
      <h1>Japanese Date Quiz (1–31)</h1>

      <div className="quiz-area">
        {/* Left Section */}
        <div className="left">
          <h2>{feedback}</h2>
          {lastCorrectKana && (
            <div className="result-box">
              <h3>Previous Correct:</h3>
              <div className="kana">Day: {lastCorrectKana.kana}</div>
              <div className="romaji">{lastCorrectKana.romaji}</div>
            </div>
          )}
        </div>

        {/* Center Section */}
        <div className="center">
          <div className="kana-box">{currentKana.kana}</div>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
            placeholder="Type romaji here"
          />
          <button onClick={handleCheck}>Check</button>
        </div>

        {/* Right Section */}
        <div className="right">
          <h3>Stats</h3>
          <p>Total Attempts: {total}</p>
          <p>Correct Answers: {correct}</p>
          <p>Accuracy: {total > 0 ? `${Math.round((correct / total) * 100)}%` : '0%'}</p>
        </div>

         <button onClick={() => navigate('/')} className="back-button">⬅ Back to Home</button>
      </div>
    </div>
  );
}

export default App;
