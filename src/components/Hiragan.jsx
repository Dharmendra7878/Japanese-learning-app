import React, { useState, useEffect, useRef } from 'react';
import './hiragan.css';
import { useNavigate } from 'react-router-dom';

const kanaList = [
  { kana: "あ", romaji: ["a"] }, { kana: "い", romaji: ["i"] }, { kana: "う", romaji: ["u"] }, { kana: "え", romaji: ["e"] }, { kana: "お", romaji: ["o"] },
  { kana: "か", romaji: ["ka"] }, { kana: "き", romaji: ["ki"] }, { kana: "く", romaji: ["ku"] }, { kana: "け", romaji: ["ke"] }, { kana: "こ", romaji: ["ko"] },
  { kana: "さ", romaji: ["sa"] }, { kana: "し", romaji: ["shi", "si"] }, { kana: "す", romaji: ["su"] }, { kana: "せ", romaji: ["se"] }, { kana: "そ", romaji: ["so"] },
  { kana: "た", romaji: ["ta"] }, { kana: "ち", romaji: ["chi", "ti"] }, { kana: "つ", romaji: ["tsu", "tu"] }, { kana: "て", romaji: ["te"] }, { kana: "と", romaji: ["to"] },
  { kana: "な", romaji: ["na"] }, { kana: "に", romaji: ["ni"] }, { kana: "ぬ", romaji: ["nu"] }, { kana: "ね", romaji: ["ne"] }, { kana: "の", romaji: ["no"] },
  { kana: "は", romaji: ["ha"] }, { kana: "ひ", romaji: ["hi"] }, { kana: "ふ", romaji: ["fu", "hu"] }, { kana: "へ", romaji: ["he"] }, { kana: "ほ", romaji: ["ho"] },
  { kana: "ま", romaji: ["ma"] }, { kana: "み", romaji: ["mi"] }, { kana: "む", romaji: ["mu"] }, { kana: "め", romaji: ["me"] }, { kana: "も", romaji: ["mo"] },
  { kana: "や", romaji: ["ya"] }, { kana: "ゆ", romaji: ["yu"] }, { kana: "よ", romaji: ["yo"] },
  { kana: "ら", romaji: ["ra"] }, { kana: "り", romaji: ["ri"] }, { kana: "る", romaji: ["ru"] }, { kana: "れ", romaji: ["re"] }, { kana: "ろ", romaji: ["ro"] },
  { kana: "わ", romaji: ["wa"] }, { kana: "を", romaji: ["wo", "o"] }, { kana: "ん", romaji: ["n"] },
  { kana: "が", romaji: ["ga"] }, { kana: "ぎ", romaji: ["gi"] }, { kana: "ぐ", romaji: ["gu"] }, { kana: "げ", romaji: ["ge"] }, { kana: "ご", romaji: ["go"] },
  { kana: "ざ", romaji: ["za"] }, { kana: "じ", romaji: ["ji", "zi"] }, { kana: "ず", romaji: ["zu"] }, { kana: "ぜ", romaji: ["ze"] }, { kana: "ぞ", romaji: ["zo"] },
  { kana: "だ", romaji: ["da"] }, { kana: "ぢ", romaji: ["ji", "di"] }, { kana: "づ", romaji: ["zu", "du"] }, { kana: "で", romaji: ["de"] }, { kana: "ど", romaji: ["do"] },
  { kana: "ば", romaji: ["ba"] }, { kana: "び", romaji: ["bi"] }, { kana: "ぶ", romaji: ["bu"] }, { kana: "べ", romaji: ["be"] }, { kana: "ぼ", romaji: ["bo"] },
  { kana: "ぱ", romaji: ["pa"] }, { kana: "ぴ", romaji: ["pi"] }, { kana: "ぷ", romaji: ["pu"] }, { kana: "ぺ", romaji: ["pe"] }, { kana: "ぽ", romaji: ["po"] },
  { kana: "きゃ", romaji: ["kya"] }, { kana: "きゅ", romaji: ["kyu"] }, { kana: "きょ", romaji: ["kyo"] },
  { kana: "しゃ", romaji: ["sha", "sya"] }, { kana: "しゅ", romaji: ["shu", "syu"] }, { kana: "しょ", romaji: ["sho", "syo"] },
  { kana: "ちゃ", romaji: ["cha", "cya"] }, { kana: "ちゅ", romaji: ["chu", "cyu"] }, { kana: "ちょ", romaji: ["cho", "cyo"] },
  { kana: "にゃ", romaji: ["nya"] }, { kana: "にゅ", romaji: ["nyu"] }, { kana: "にょ", romaji: ["nyo"] },
  { kana: "ひゃ", romaji: ["hya"] }, { kana: "ひゅ", romaji: ["hyu"] }, { kana: "ひょ", romaji: ["hyo"] },
  { kana: "みゃ", romaji: ["mya"] }, { kana: "みゅ", romaji: ["myu"] }, { kana: "みょ", romaji: ["myo"] },
  { kana: "りゃ", romaji: ["rya"] }, { kana: "りゅ", romaji: ["ryu"] }, { kana: "りょ", romaji: ["ryo"] },
  { kana: "ぎゃ", romaji: ["gya"] }, { kana: "ぎゅ", romaji: ["gyu"] }, { kana: "ぎょ", romaji: ["gyo"] },
  { kana: "じゃ", romaji: ["ja", "jya", "zya"] }, { kana: "じゅ", romaji: ["ju", "jyu", "zyu"] }, { kana: "じょ", romaji: ["jo", "jyo", "zyo"] },
  { kana: "びゃ", romaji: ["bya"] }, { kana: "びゅ", romaji: ["byu"] }, { kana: "びょ", romaji: ["byo"] },
  { kana: "ぴゃ", romaji: ["pya"] }, { kana: "ぴゅ", romaji: ["pyu"] }, { kana: "ぴょ", romaji: ["pyo"] },
];

function Hiragana() {
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
    const randomKana = kanaList[Math.floor(Math.random() * kanaList.length)];
    setCurrentKana(randomKana);
    setInput('');
    setFeedback('');
  };

  const handleCheck = () => {
    const isCorrect = currentKana.romaji.includes(input.toLowerCase().trim());
    setTotal(prev => prev + 1);

    if (isCorrect) {
      setCorrect(prev => prev + 1);
      setFeedback('Correct!');
      setLastCorrectKana(currentKana);
      generateRandomKana();
    } else {
      setFeedback('Wrong! Try again.');
      setLastCorrectKana(null);
      setInput('');
      inputRef.current.focus();
    }
  };

  return (
    <div className="container">
      
      <h1>Japanese Kana Quiz</h1>

      <div className="quiz-area">
        {/* Left */}
        <div className="left">
          <h2>{feedback}</h2>
          {lastCorrectKana && (
            <>
              <h1>Correct Answer!</h1>
              <div className="kana">{lastCorrectKana.kana}</div>
              <div className="romaji">{lastCorrectKana.romaji.join(', ')}</div>
            </>
          )}
        </div>

        {/* Center */}
        <div className="center">
          <div className="kana-box">{currentKana.kana}</div>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
            placeholder="Type romaji"
          />
          <button onClick={handleCheck}>Check</button>
        </div>

        {/* Right */}
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

export default Hiragana;
