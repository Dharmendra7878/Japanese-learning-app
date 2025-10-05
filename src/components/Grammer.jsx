import React, { useState, useEffect, useRef } from 'react';
import './Grammer.css';

const kanaList = [
  { kana: "This Pen Is mine", romaji: ["kono enpitsu wa watashi no desu"] },
  { kana: "This Is Hon", romaji: ["kore wa hon desu"] },
  { kana: "is that newspaper ?", romaji: ["sore wa shinbun desu ka "] },
  { kana: "This is 6 or 5 ?", romaji: ["kore wa 6 desu ka 5 desu ka"] },
  { kana: "Here Is Washroom", romaji: ["koko wa otearai desu"] },
  { kana: "I am In School", romaji: ["watshi wa gakkou desu"] },
  { kana: "Where Is toilet ?", romaji: ["toire doko desu ka"] },
  { kana: "where is your school?", romaji: ["daigoku wa doko desu ka"] },
  { kana: "what time is it now ?", romaji: ["ima nanji desu ka"] },
  { kana: "what time is it in india?", romaji: ["indojin nanji desu ka"] },
  { kana: "I Study Everday", romaji: ["watashi wa mainichi benkyoushimasu"] },
  { kana: "i sleep at ten", romaji: ["watashi wa 10ji ni nemasu"] },
  { kana: "I will work on April 1st", romaji: ["watashi wa shigatsu tsuitachi ni hatarakimasu"] },
  { kana: "what time do you Sleep", romaji: ["anata wa nanji ni nemasu ka"] },
  { kana: "i wake up at six everyday", romaji: ["watashi wa mainichi 6ji ni okimasu"] },
  { kana: "i will wake up at 6 Tomorrow", romaji: ["watashi wa ashita 6ji ni okimasu"] },
  { kana: "Do you Study Everday", romaji: ["mainichi benkyoushimasu"] },
  { kana: "Did you take a day off yesterday?", romaji: ["kinou yasumimashita ka"] },
  { kana: "I work From 8 to 4", romaji: ["watashi wa 8ji kara 4ji made hatarakimasu"] },
  { kana: "it takes 4 hours from manila to tokyo", romaji: ["manira kara tokyo made 4ji kan kakaromasu"] },
  { kana: "i work from 9", romaji: ["watashi wa 9ji kara hatarakimasu"] },
  { kana: "to tokyo station please", romaji: ["tokyoek made onigaishimasu"] },
  { kana: "Im from India ", romaji: ["watashi wa indojin kara kimashita"] },
  { kana: "The Bank iS (open) from 9 to 3", romaji: ["ginkou wa 9ji kara 3jin made desu"] },
  { kana: "lunch break is untill 1.30", romaji: ["hiruyasumi wa 1ji 30pun made desu"] },
  { kana: "from What Time untill what time is the lunch break?", romaji: ["hiruyasumi wa nanji kara nanji made desu ka"] },
  { kana: "I dont work on saturday and sunday", romaji: ["watashi wa doyoubi to nichiyoubi hatarakimasen"] },
  { kana: "banks are closed on saturday and sunday", romaji: ["ginkou wa doyoubi to nichiyoubi yasumi desu"] },
  { kana: "it is holiday tommorrow right?", romaji: ["ashita yasumi desu he"] },
  { kana: "", romaji: [""] },
  

];


function App() {
  const [currentKana, setCurrentKana] = useState({});
  const [lastCorrectKana, setLastCorrectKana] = useState(null);
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [correct, setCorrect] = useState(0);
  const [total, setTotal] = useState(0);
  const inputRef = useRef();

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
      </div>
    </div>
  );
}

export default App;
