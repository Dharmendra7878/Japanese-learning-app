import React, { useState, useEffect, useRef } from 'react';
import './kana.css';
import { useNavigate } from 'react-router-dom';


const kanaList = [
  

  { kana: "ア", romaji: ["a"] }, { kana: "イ", romaji: ["i"] }, { kana: "ウ", romaji: ["u"] }, { kana: "エ", romaji: ["e"] }, { kana: "オ", romaji: ["o"] },
  { kana: "カ", romaji: ["ka"] }, { kana: "キ", romaji: ["ki"] }, { kana: "ク", romaji: ["ku"] }, { kana: "ケ", romaji: ["ke"] }, { kana: "コ", romaji: ["ko"] },
  { kana: "サ", romaji: ["sa"] }, { kana: "シ", romaji: ["shi", "si"] }, { kana: "ス", romaji: ["su"] }, { kana: "セ", romaji: ["se"] }, { kana: "ソ", romaji: ["so"] },
  { kana: "タ", romaji: ["ta"] }, { kana: "チ", romaji: ["chi", "ti"] }, { kana: "ツ", romaji: ["tsu", "tu"] }, { kana: "テ", romaji: ["te"] }, { kana: "ト", romaji: ["to"] },
  { kana: "ナ", romaji: ["na"] }, { kana: "ニ", romaji: ["ni"] }, { kana: "ヌ", romaji: ["nu"] }, { kana: "ネ", romaji: ["ne"] }, { kana: "ノ", romaji: ["no"] },
  { kana: "ハ", romaji: ["ha"] }, { kana: "ヒ", romaji: ["hi"] }, { kana: "フ", romaji: ["fu", "hu"] }, { kana: "ヘ", romaji: ["he"] }, { kana: "ホ", romaji: ["ho"] },
  { kana: "マ", romaji: ["ma"] }, { kana: "ミ", romaji: ["mi"] }, { kana: "ム", romaji: ["mu"] }, { kana: "メ", romaji: ["me"] }, { kana: "モ", romaji: ["mo"] },
  { kana: "ヤ", romaji: ["ya"] }, { kana: "ユ", romaji: ["yu"] }, { kana: "ヨ", romaji: ["yo"] },
  { kana: "ラ", romaji: ["ra"] }, { kana: "リ", romaji: ["ri"] }, { kana: "ル", romaji: ["ru"] }, { kana: "レ", romaji: ["re"] }, { kana: "ロ", romaji: ["ro"] },
  { kana: "ワ", romaji: ["wa"] }, { kana: "ヲ", romaji: ["wo", "o"] }, { kana: "ン", romaji: ["n"] },
  { kana: "ガ", romaji: ["ga"] }, { kana: "ギ", romaji: ["gi"] }, { kana: "グ", romaji: ["gu"] }, { kana: "ゲ", romaji: ["ge"] }, { kana: "ゴ", romaji: ["go"] },
  { kana: "ザ", romaji: ["za"] }, { kana: "ジ", romaji: ["ji", "zi"] }, { kana: "ズ", romaji: ["zu"] }, { kana: "ゼ", romaji: ["ze"] }, { kana: "ゾ", romaji: ["zo"] },
  { kana: "ダ", romaji: ["da"] }, { kana: "ヂ", romaji: ["ji", "di"] }, { kana: "ヅ", romaji: ["zu", "du"] }, { kana: "デ", romaji: ["de"] }, { kana: "ド", romaji: ["do"] },
  { kana: "バ", romaji: ["ba"] }, { kana: "ビ", romaji: ["bi"] }, { kana: "ブ", romaji: ["bu"] }, { kana: "ベ", romaji: ["be"] }, { kana: "ボ", romaji: ["bo"] },
  { kana: "パ", romaji: ["pa"] }, { kana: "ピ", romaji: ["pi"] }, { kana: "プ", romaji: ["pu"] }, { kana: "ペ", romaji: ["pe"] }, { kana: "ポ", romaji: ["po"] },
  { kana: "キャ", romaji: ["kya"] }, { kana: "キュ", romaji: ["kyu"] }, { kana: "キョ", romaji: ["kyo"] },
  { kana: "シャ", romaji: ["sha", "sya"] }, { kana: "シュ", romaji: ["shu", "syu"] }, { kana: "ショ", romaji: ["sho", "syo"] },
  { kana: "チャ", romaji: ["cha", "cya"] }, { kana: "チュ", romaji: ["chu", "cyu"] }, { kana: "チョ", romaji: ["cho", "cyo"] },
  { kana: "ニャ", romaji: ["nya"] }, { kana: "ニュ", romaji: ["nyu"] }, { kana: "ニョ", romaji: ["nyo"] },
  { kana: "ヒャ", romaji: ["hya"] }, { kana: "ヒュ", romaji: ["hyu"] }, { kana: "ヒョ", romaji: ["hyo"] },
  { kana: "ミャ", romaji: ["mya"] }, { kana: "ミュ", romaji: ["myu"] }, { kana: "ミョ", romaji: ["myo"] },
  { kana: "リャ", romaji: ["rya"] }, { kana: "リュ", romaji: ["ryu"] }, { kana: "リョ", romaji: ["ryo"] },
  { kana: "ギャ", romaji: ["gya"] }, { kana: "ギュ", romaji: ["gyu"] }, { kana: "ギョ", romaji: ["gyo"] },
  { kana: "ジャ", romaji: ["ja", "jya", "zya"] }, { kana: "ジュ", romaji: ["ju", "jyu", "zyu"] }, { kana: "ジョ", romaji: ["jo", "jyo", "zyo"] },
  { kana: "ビャ", romaji: ["bya"] }, { kana: "ビュ", romaji: ["byu"] }, { kana: "ビョ", romaji: ["byo"] },
  { kana: "ピャ", romaji: ["pya"] }, { kana: "ピュ", romaji: ["pyu"] }, { kana: "ピョ", romaji: ["pyo"] }
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
    setLastCorrectKana(currentKana); // ✅ Show this on left
    generateRandomKana(); // ✅ Move to next question
  } else {
    setFeedback('Wrong! Try again.');
    setLastCorrectKana(null); // ❌ Clear the previous correct answer
    setInput('');
    inputRef.current.focus();
  }
};

  return (
    <div className="container">
      <h1>Japanese Kana Quiz</h1>

      <div className="quiz-area">
        {/* Left: Feedback and Last Correct */}
        <div className="left">
          <h2>{feedback}</h2>
          {lastCorrectKana && (
            <>
              <h1>Correct Answer !</h1>
              <div className="kana">{lastCorrectKana.kana}</div>
              <div className="romaji">{lastCorrectKana.romaji.join(', ')}</div>
            </>
          )}
        </div>

        {/* Center: Question */}
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

        {/* Right: Stats */}
        <div className="right">
          <h3>Stats</h3>
          <p>Total Attempts: {total}</p>
          <p>Correct Answers: {correct}</p>
          <p>
            Accuracy: {total > 0 ? `${Math.round((correct / total) * 100)}%` : '0%'}
          </p>
        </div>

        <button onClick={() => navigate('/')} className="back-button">⬅ Back to Home</button>
     
      </div>
    </div>
  );
}

export default App;
