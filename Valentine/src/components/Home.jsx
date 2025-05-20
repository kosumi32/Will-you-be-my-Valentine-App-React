import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import helloKitty from '../assets/images/hellokitty.gif';

import '../css/Home.css';

export default function Home() {
  const [yesSize, setYesSize] = useState(1);
  const [noText, setNoText] = useState("No");
  const navigate = useNavigate();

  const handleNoClick = () => {
    setYesSize(prev => prev + 0.1);
    const funnyTexts = [
      "まじで？",
      "もういちどかんがえてくれー",
      "Don't break my heart 💔",
      "Really??",
      "もう...",
      "Please say yes 🥺",
      "Last chance!",
      "Say YES!! 💘"
    ];
    setNoText(funnyTexts[Math.floor(Math.random() * funnyTexts.length)]);
  };

  const handleYesClick = () => {
    navigate('/love');
  };

  return (
    <div className='home'>
      
      <img
        src= {helloKitty}
        alt="Cute Valentine Gif"
        className="valentine-gif"
      />

      <h1 className="main-title">Will you be my Valentine?</h1>
      <div className="buttons">
        <button 
          onClick={handleYesClick}
          style={{ transform: `scale(${yesSize})` }}
          className="yes-button"
        >
          Yes 💖
        </button>
        <button
          onClick={handleNoClick}
          className="no-button"
        >
          {noText}
        </button>
      </div>
    </div>
  );
}
