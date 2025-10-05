import React, { useState } from "react";
import "./Home.css";
import sideImage from "../../assets/imagejapab.jpg";
import image1 from "../../assets/mountfuji.jpg";
import image2 from "../../assets/shibuya.webp";
import image3 from "../../assets/torii-gate-japan.jpg";

import fuji1 from "../../assets/fuji1.jpg";
import fuji2 from "../../assets/fuji2.jpg";
import fuji3 from "../../assets/fuji3.jpg";
import crossing1 from "../../assets/crossing1.jpg";
import crossing2 from "../../assets/crossing2.webp";
import gate1 from "../../assets/gate1.webp";
import gate2 from "../../assets/gate2.jpg";
import thank from "../../assets/arigato3.gif";
import thank2 from "../../assets/100.gif";
import guy from "../../assets/guy2.gif";
import guy1 from "../../assets/guy1.gif";
import naruto from "../../assets/goku.gif";




// Hiragana with Romaji
const hiraganaData = [
  { jp: "あ", romaji: "a", headerClass: "header-1" },
  { jp: "い", romaji: "i", headerClass: "header-1" },
  { jp: "う", romaji: "u", headerClass: "header-1" },
  { jp: "え", romaji: "e", headerClass: "header-1" },
  { jp: "お", romaji: "o", headerClass: "header-1" },
  { jp: "か", romaji: "ka", headerClass: "header-1" },
  { jp: "き", romaji: "ki", headerClass: "header-1" },
  { jp: "く", romaji: "ku", headerClass: "header-1" },
  { jp: "け", romaji: "ke", headerClass: "header-1" },
  { jp: "こ", romaji: "ko", headerClass: "header-1" },
  { jp: "さ", romaji: "sa", headerClass: "header-1" },
  { jp: "し", romaji: "shi", headerClass: "header-1" },
  { jp: "す", romaji: "su", headerClass: "header-1" },
  { jp: "せ", romaji: "se", headerClass: "header-1" },
  { jp: "そ", romaji: "so", headerClass: "header-1" },
  { jp: "た", romaji: "ta", headerClass: "header-1" },
  { jp: "ち", romaji: "chi", headerClass: "header-1" },
  { jp: "つ", romaji: "tsu", headerClass: "header-1" },
  { jp: "て", romaji: "te", headerClass: "header-1" },
  { jp: "と", romaji: "to", headerClass: "header-1" },
  { jp: "な", romaji: "na", headerClass: "header-1" },
  { jp: "に", romaji: "ni", headerClass: "header-1" },
  { jp: "ぬ", romaji: "nu", headerClass: "header-1" },
  { jp: "ね", romaji: "ne", headerClass: "header-1" },
  { jp: "の", romaji: "no", headerClass: "header-1" },
  { jp: "は", romaji: "ha", headerClass: "header-1" },
  { jp: "ひ", romaji: "hi", headerClass: "header-1" },
  { jp: "ふ", romaji: "fu", headerClass: "header-1" },
  { jp: "へ", romaji: "he", headerClass: "header-1" },
  { jp: "ほ", romaji: "ho", headerClass: "header-1" },
  { jp: "ま", romaji: "ma", headerClass: "header-1" },
  { jp: "み", romaji: "mi", headerClass: "header-1" },
  { jp: "む", romaji: "mu", headerClass: "header-1" },
  { jp: "め", romaji: "me", headerClass: "header-1" },
  { jp: "も", romaji: "mo", headerClass: "header-1" },
  { jp: "や", romaji: "ya", headerClass: "header-1" },
  { jp: "ゆ", romaji: "yu", headerClass: "header-1" },
  { jp: "よ", romaji: "yo", headerClass: "header-1" },
  { jp: "ら", romaji: "ra", headerClass: "header-1" },
  { jp: "り", romaji: "ri", headerClass: "header-1" },
  { jp: "る", romaji: "ru", headerClass: "header-1" },
  { jp: "れ", romaji: "re", headerClass: "header-1" },
  { jp: "ろ", romaji: "ro", headerClass: "header-1" },
  { jp: "わ", romaji: "wa", headerClass: "header-1" },
  { jp: "を", romaji: "wo", headerClass: "header-1" },
  { jp: "ん", romaji: "n", headerClass: "header-1" },
];

// Katakana with Romaji
const katakanaData = [
  { jp: "ア", romaji: "a", headerClass: "header-2" },
  { jp: "イ", romaji: "i", headerClass: "header-2" },
  { jp: "ウ", romaji: "u", headerClass: "header-2" },
  { jp: "エ", romaji: "e", headerClass: "header-2" },
  { jp: "オ", romaji: "o", headerClass: "header-2" },
  { jp: "カ", romaji: "ka", headerClass: "header-2" },
  { jp: "キ", romaji: "ki", headerClass: "header-2" },
  { jp: "ク", romaji: "ku", headerClass: "header-2" },
  { jp: "ケ", romaji: "ke", headerClass: "header-2" },
  { jp: "コ", romaji: "ko", headerClass: "header-2" },
  { jp: "サ", romaji: "sa", headerClass: "header-2" },
  { jp: "シ", romaji: "shi", headerClass: "header-2" },
  { jp: "ス", romaji: "su", headerClass: "header-2" },
  { jp: "セ", romaji: "se", headerClass: "header-2" },
  { jp: "ソ", romaji: "so", headerClass: "header-2" },
  { jp: "タ", romaji: "ta", headerClass: "header-2" },
  { jp: "チ", romaji: "chi", headerClass: "header-2" },
  { jp: "ツ", romaji: "tsu", headerClass: "header-2" },
  { jp: "テ", romaji: "te", headerClass: "header-2" },
  { jp: "ト", romaji: "to", headerClass: "header-2" },
  { jp: "ナ", romaji: "na", headerClass: "header-2" },
  { jp: "ニ", romaji: "ni", headerClass: "header-2" },
  { jp: "ヌ", romaji: "nu", headerClass: "header-2" },
  { jp: "ネ", romaji: "ne", headerClass: "header-2" },
  { jp: "ノ", romaji: "no", headerClass: "header-2" },
  { jp: "ハ", romaji: "ha", headerClass: "header-2" },
  { jp: "ヒ", romaji: "hi", headerClass: "header-2" },
  { jp: "フ", romaji: "fu", headerClass: "header-2" },
  { jp: "ヘ", romaji: "he", headerClass: "header-2" },
  { jp: "ホ", romaji: "ho", headerClass: "header-2" },
  { jp: "マ", romaji: "ma", headerClass: "header-2" },
  { jp: "ミ", romaji: "mi", headerClass: "header-2" },
  { jp: "ム", romaji: "mu", headerClass: "header-2" },
  { jp: "メ", romaji: "me", headerClass: "header-2" },
  { jp: "モ", romaji: "mo", headerClass: "header-2" },
  { jp: "ヤ", romaji: "ya", headerClass: "header-2" },
  { jp: "ユ", romaji: "yu", headerClass: "header-2" },
  { jp: "ヨ", romaji: "yo", headerClass: "header-2" },
  { jp: "ラ", romaji: "ra", headerClass: "header-2" },
  { jp: "リ", romaji: "ri", headerClass: "header-2" },
  { jp: "ル", romaji: "ru", headerClass: "header-2" },
  { jp: "レ", romaji: "re", headerClass: "header-2" },
  { jp: "ロ", romaji: "ro", headerClass: "header-2" },
  { jp: "ワ", romaji: "wa", headerClass: "header-2" },
  { jp: "ヲ", romaji: "wo", headerClass: "header-2" },
  { jp: "ン", romaji: "n", headerClass: "header-2" },
];

const kanjiTen = [
  { kanji: "日", meaning: "Sun/Day" },
  { kanji: "月", meaning: "Moon/Month" },
  { kanji: "火", meaning: "Fire" },
  { kanji: "水", meaning: "Water" },
  { kanji: "木", meaning: "Tree/Wood" },
  { kanji: "金", meaning: "Gold/Money" },
  { kanji: "土", meaning: "Earth/Soil" },
  { kanji: "山", meaning: "Mountain" },
  { kanji: "川", meaning: "River" },
  { kanji: "人", meaning: "Person" },
  { kanji: "田", meaning: "Rice Field" },
  { kanji: "車", meaning: "Car/Vehicle" },
  { kanji: "花", meaning: "Flower" },
  { kanji: "天", meaning: "Heaven/Sky" },
  { kanji: "石", meaning: "Stone" },
  { kanji: "空", meaning: "Sky/Empty" },
  { kanji: "雨", meaning: "Rain" },
  { kanji: "花", meaning: "Flower" },
];

const dates = [
  { number: 1, label: "Tsuitachi", headerClass: "header-1" },
  { number: 2, label: "Futsuka", headerClass: "header-2" },
  { number: 3, label: "Mikka", headerClass: "header-3" },
  { number: 4, label: "Yokka", headerClass: "header-4" },
  { number: 5, label: "Itsuka", headerClass: "header-5" },
  { number: 6, label: "Muika", headerClass: "header-6" },
  { number: 7, label: "Nanoka", headerClass: "header-7" },
  { number: 8, label: "Yōka", headerClass: "header-8" },
  { number: 9, label: "Kokonoka", headerClass: "header-9" },
  { number: 10, label: "Tōka", headerClass: "header-10" },
  { number: 11, label: "Jūichi-nichi", headerClass: "header-11" },
  { number: 12, label: "Jūni-nichi", headerClass: "header-12" },
  { number: 13, label: "Jūsan-nichi", headerClass: "header-13" },
  { number: 14, label: "Jūyokka", headerClass: "header-14" },
  { number: 15, label: "Jūgo-nichi", headerClass: "header-15" },
  { number: 16, label: "Jūroku-nichi", headerClass: "header-16" },
  { number: 17, label: "Jūshichi-nichi", headerClass: "header-17" },
  { number: 18, label: "Jūhachi-nichi", headerClass: "header-18" },
  { number: 19, label: "Jūku-nichi", headerClass: "header-19" },
  { number: 20, label: "Hatsuka", headerClass: "header-20" },
  { number: 21, label: "Nijūichi-nichi", headerClass: "header-21" },
  { number: 22, label: "Nijūni-nichi", headerClass: "header-22" },
  { number: 23, label: "Nijūsan-nichi", headerClass: "header-23" },
  { number: 24, label: "Nijūyokka", headerClass: "header-24" },
  { number: 25, label: "Nijūgo-nichi", headerClass: "header-25" },
  { number: 26, label: "Nijūroku-nichi", headerClass: "header-26" },
  { number: 27, label: "Nijūshichi-nichi", headerClass: "header-27" },
  { number: 28, label: "Nijūhachi-nichi", headerClass: "header-28" },
  { number: 29, label: "Nijūku-nichi", headerClass: "header-29" },
  { number: 30, label: "Sanjū-nichi", headerClass: "header-30" },
  { number: 31, label: "Sanjūichi-nichi", headerClass: "header-31" },
];

const months = [
  { number: 1, label: "Ichigatsu", headerClass: "header-10" },
  { number: 2, label: "Nigatsu", headerClass: "header-10" },
  { number: 3, label: "Sangatsu", headerClass: "header-10" },
  { number: 4, label: "Shigatsu", headerClass: "header-10" },
  { number: 5, label: "Gogatsu", headerClass: "header-10" },
  { number: 6, label: "Rokugatsu", headerClass: "header-10" },
  { number: 7, label: "Shichigatsu", headerClass: "header-10" },
  { number: 8, label: "Hachigatsu", headerClass: "header-10" },
  { number: 9, label: "Kugatsu", headerClass: "header-10" },
  { number: 10, label: "Jūgatsu", headerClass: "header-10" },
  { number: 11, label: "Jūichigatsu", headerClass: "header-10" },
  { number: 12, label: "Jūnigatsu", headerClass: "header-10" },
];

const weekdays = [
  { number: 1, label: "Getsuyōbi", headerClass: "header-1" },    // Monday
  { number: 2, label: "Kayōbi", headerClass: "header-2" },        // Tuesday
  { number: 3, label: "Suiyōbi", headerClass: "header-3" },       // Wednesday
  { number: 4, label: "Mokuyōbi", headerClass: "header-4" },      // Thursday
  { number: 5, label: "Kin'yōbi", headerClass: "header-5" },      // Friday
  { number: 6, label: "Doyōbi", headerClass: "header-6" },        // Saturday
  { number: 7, label: "Nichiyōbi", headerClass: "header-7" }      // Sunday
];


const imagesList = [
  {
    id: 0,
    cover: fuji1,
    title: "Mount Fuji in Spring",
    description: "Cherry blossoms frame the iconic peak.",
    gallery: [
      { img: fuji1, fact: "Mount Fuji stands tall at an impressive 3,776 meters, making it the tallest mountain in Japan." },
      { img: fuji2, fact: "Considered sacred, it has influenced Japanese art, poetry, and spirituality for centuries." },
      { img: fuji3, fact: "The iconic snow-capped peak is a favorite subject for photographers and tourists alike." },
    ],
  },
  {
    id: 1,
    cover: crossing1,
    title: "Shibuya Crossing",
    description: "The famous scramble crossing in Tokyo.",
    gallery: [
      {
        img: crossing1,
        fact: "Shibuya Crossing is famous for being one of the busiest pedestrian crossings in the world, handling thousands of people every green light.",
      },
      {
        img: crossing2,
        fact: "Located outside Shibuya Station, one of Tokyo's major transport hubs, it epitomizes the vibrant fast pace of city life.  ",
      },
    ],
  },
  {
    id: 2,
    cover: gate1,
    title: "Traditional Torii Gate",
    description: "A classic symbol of Japan’s shrines.",
    gallery: [
      { img: gate1, fact: "Torii gates are an enduring cultural symbol representing reverence, tradition, and spiritual cleansing in Japan." },
      { img: gate2, fact: "The vivid red/orange color is believed to keep away evil spirits and bring good fortune." },
    ],
  },
];

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeGallery, setActiveGallery] = useState([]);
  const [activeTitle, setActiveTitle] = useState("");
  const [activeDesc, setActiveDesc] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (gallery, title, desc) => {
    setActiveGallery(gallery);
    setActiveTitle(title);
    setActiveDesc(desc);
    setCurrentIndex(0);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);
  const nextImg = () => setCurrentIndex((i) => (i + 1) % activeGallery.length);
  const prevImg = () =>
    setCurrentIndex(
      (i) => (i + activeGallery.length - 1) % activeGallery.length
    );

  return (
    <>
      <div className="japan-landing-container">
        <div className="japan-landing-left">
          <h1 className="japan-title">JAPAN CULTURE!</h1>
          <p className="japan-desc">
            Experience the rich traditions and vibrant spirit of Japan, where
            ancient heritage blends with modern wonders to create unforgettable
            memories for every traveler.
          </p>
          <a href="https://en.wikipedia.org/wiki/Culture_of_Japan" className="see-more-btn" >SEE MORE</a>
        </div>
        <div className="japan-landing-right">
          <img src={sideImage} alt="Japan Culture" className="japan-side-img" />
        </div>
      </div>

      <div>
         <h1 className="intro-title">Something About japan</h1>
         <p className="intro-desc">
            Click On The Image Section To Know Some Amazing Facts About Japan.
          </p>
        <div className="gallery-row">
          {imagesList.map((item) => (
            <div
              className="gallery-card"
              key={item.id}
              onClick={() =>
                openModal(item.gallery, item.title, item.description)
              }
            >
              <img
                src={item.cover}
                alt={item.title}
                className="gallery-cover"
              />
              <div className="gallery-meta">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        {modalOpen && (
          <div className="popup-backdrop" onClick={closeModal}>
            <div className="popup-box" onClick={(e) => e.stopPropagation()}>
              <button className="popup-close" onClick={closeModal}>
                &times;
              </button>

              <div className="popup-slide-wrapper">
                <button className="popup-btn" onClick={prevImg}> &lt;</button>

                
                <img
                  src={activeGallery[currentIndex].img}
                  alt=""
                  className="popup-img"
                />
                <button className="popup-btn" onClick={nextImg}>&gt;</button>
              </div>

              <div className="popup-info">
                <div className="popup-fact">
                  <b>{activeGallery[currentIndex].fact}</b>
                </div>
                <div className="popup-bottom-info">
                  {/* <div className="popup-title">{activeTitle}</div> */}
                  {/* <div className="popup-desc">{activeDesc}</div> */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="home-container">
        <section className="intro-section">
          <h1 className="intro-title">Welcome to Japanese Learning App</h1>
          <p className="intro-subtitle">
            This app helps you learn Japanese basics such as Hiragana, Katakana,
            Kanji, Dates, and more.
          </p>
          <p className="intro-desc">
            Practice daily to improve your skills and enjoy your journey!
          </p>
        </section>

        {/* Hiragana */}
        <section className="w-full max-w-6xl bg-white rounded-2xl p-8 shadow-lg">
          <br />  
          <br />
           <img src={guy} alt="sorry" />
          <h2 className="intro-title">
            
           
            Hiragana
            <p className="intro-desc">Hiragana is the basic Japanese phonetic alphabet. It represents every sound in the Japanese language.</p>
            <p className="intro-desc">Hiragana is used along with kanji to write all native Japanese words (including words of Chinese origin). <br />
                                      Hiragana is used for verb and adjective endings (okurigana), particles, words that have no kanji, words <br />
                                       which are commonly written only in kana, words for which the writer does not know the kanji, and as furigana <br />
                                        (hints provided by the writer to the reading of an unfamiliar kanji)..</p>
          </h2>
          <br />
          <div className="calendar-grid">
            {hiraganaData.map(({ jp, romaji, headerClass }, i) => (
              <div key={i} className="calendar-card">
                <div className={`card-header ${headerClass}`}></div>
                <div className="card-number">{jp}</div>
                <div className="card-label">{romaji}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Katakana */}
        <section className="w-full max-w-6xl bg-white rounded-2xl p-8 shadow-lg">
          <br />
          <br /><br />
           <img src={guy1} alt="sorry" />
          <h2 className="intro-title">
            Katakana
            <p className="intro-desc">Katakana is a Japanese syllable-based writing system, used for loan words and foreign names/places.</p>
            <p className="intro-desc">Katakana (カタカナ) is a Japanese syllabary, part of the Japanese writing system, primarily used for writing <br />
                                      foreign loanwords, onomatopoeia, scientific names, and for stylistic emphasis or to denote unnatural speech, <br />
                                       such as that of a robot. It is one of two syllabaries, alongside hiragana, where each character represents  <br />
                                       a syllable rather than a single letter, with 46 characters that represent the same sounds as their hiragana <br />
                                       counterparts but are written in a more angular, squared-off style
                                       <br />
                                     </p>
          </h2>
          <div className="calendar-grid">
            {katakanaData.map(({ jp, romaji, headerClass }, i) => (
              <div key={i} className="calendar-card">
                <div className={`card-header ${headerClass}`}></div>
                <div className="card-number">{jp}</div>
                <div className="card-label">{romaji}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="kanji-section">
          <img src={naruto} alt="sorry" />
          <img src={naruto} alt="sorry" />
          <img src={naruto} alt="sorry" />
          <img src={naruto} alt="sorry" />
          <img src={naruto} alt="sorry" />
          <img src={naruto} alt="sorry" />
          <h2 className="kanji-section-title">Basic Kanji</h2>
          <div className="kanji-grid">
            {kanjiTen.map(({ kanji, meaning }, i) => (
              <div key={i} className="kanji-item-card">
                <div className="kanji-symbol">{kanji}</div>
                <div className="kanji-explanation">{meaning}</div>
              </div>
            ))}
          </div>

          <br /><br />
          <img src={naruto} alt="sorry" />
          <img src={naruto} alt="sorry" />
          <img src={naruto} alt="sorry" />
          <img src={naruto} alt="sorry" />
          <img src={naruto} alt="sorry" />
          <img src={naruto} alt="sorry" />
        </section>


        <h2 className="intro-title"> Learn About How To Write Dates in Japanese</h2>

        <div className="containerDiv">
  {/* Dates */}
  <section className="w-full max-w-6xl bg-white rounded-2xl p-8 shadow-lg">
    <h2 className="text-2xl font-semibold text-orange-700 mb-8 text-center">
      Japanese Date Calendar
    </h2>
    <div className="calendar-grid">
      {dates.map(({ number, label, headerClass }) => (
        <div key={number} className="calendar-card">
          <div className={`card-header ${headerClass}`}></div>
          <div className="card-number">{number}</div>
          <div className="card-label">{label}</div>
        </div>
      ))}
    </div>
  </section>

  {/* Months */}
  <section className="w-full max-w-6xl bg-white rounded-2xl p-8 shadow-lg">
    <h2 className="text-2xl font-semibold text-orange-700 mb-8 text-center">
      Japanese Months
    </h2>
    <div className="calendar-grid">
      {months.map(({ number, label, headerClass }) => (
        <div key={number} className="calendar-card">
          <div className={`card-header ${headerClass}`}></div>
          <div className="card-number">{number}</div>
          <div className="card-label">{label}</div>
        </div>
      ))}
    </div>
  </section>

  {/* Weekdays */}
  <section className="w-full max-w-6xl bg-white rounded-2xl p-8 shadow-lg">
    <h2 className="text-2xl font-semibold text-orange-700 mb-8 text-center">
      Japanese Weekdays
    </h2>
    <div className="calendar-grid">
      {weekdays.map(({ number, label, headerClass }) => (
        <div key={number} className="calendar-card">
          <div className={`card-header ${headerClass}`}></div>
          <div className="card-number">{number}</div>
          <div className="card-label">{label}</div>
        </div>
      ))}
    </div>
  </section>
       </div>



      </div>

<br /><br /><br />
      <img src={thank} alt="soorry" />
      <br />
      <img src={thank2} alt="soorry" />


      <footer className="footer-wave">
        <div className="footer-svg">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#1565c0"
              fillOpacity="1"
              d="M0,64L48,80C96,96,192,128,288,122.7C384,117,480,75,576,74.7C672,75,768,117,864,144C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="footer-content">
          <div className="footer-icons">
            <a
              href="https://github.com/Dharmendra7878"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              {" "}
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/dharmendra-choudhary-b58316314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.instagram.com/dharmendra_choudhary_8?igsh=MTh2bm5uMWRyNmpjYw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="footer-links">
            <a href="#">Home</a>
            <a href="/learning">Practice</a>
          </div>
          <div className="footer-credit">
            ©2025 Dharmendra Choudhary | All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
