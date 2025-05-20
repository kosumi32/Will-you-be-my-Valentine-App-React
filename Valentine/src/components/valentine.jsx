import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function Home() {
  const [yesSize, setYesSize] = useState(1);
  const [noText, setNoText] = useState("No");
  const navigate = useNavigate();

  const handleNoClick = () => {
    setYesSize(prev => prev + 0.3);
    const funnyTexts = [
      "Are you sure?",
      "Think again~",
      "Don't break my heart 💔",
      "Really??",
      "Come on...",
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
    <div className="flex flex-col items-center justify-center h-screen bg-pink-100">
      <h1 className="text-4xl font-bold text-red-600 mb-8">Will you be my Valentine?</h1>
      <div className="flex gap-6">
        <button
          onClick={handleYesClick}
          style={{ transform: `scale(${yesSize})` }}
          className="px-6 py-3 bg-red-500 text-white rounded-2xl text-xl shadow-md hover:bg-red-600 transition-transform duration-300"
        >
          Yes 💖
        </button>
        <button
          onClick={handleNoClick}
          className="px-6 py-3 bg-gray-300 text-black rounded-2xl text-xl shadow-md hover:bg-gray-400 transition duration-300"
        >
          {noText}
        </button>
      </div>
    </div>
  );
}

function LovePage() {
  return (
    <div className="flex items-center justify-center h-screen bg-red-100">
      <h1 className="text-5xl font-bold text-red-600 animate-pulse">I love you!! ❤️</h1>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/love" element={<LovePage />} />
      </Routes>
    </Router>
  );
}
