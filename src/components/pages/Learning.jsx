import React from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import "./learning.css";
import Navbar from "../Navbar";

const Learning = () => {
  const navigate = useNavigate();

  return (

    <>
     <Navbar />
    <div className="learning">
     
      <h1>Japanese Learning App</h1>
      <button onClick={() => navigate("/hiragana")}>Learn Hiragana</button>
      <button onClick={() => navigate("/katakana")}>Learn Katakana</button>
      <button onClick={() => navigate("/kana")}>Learn Kanji</button>
      <button onClick={() => navigate("/date")}>Learn Dates</button>
      <button onClick={() => navigate("/number")}>Learn Numbers</button>
      <button onClick={() => navigate("/grammer")}>Learn Grammer</button>
    </div>
    </>
  );
};

export default Learning;
