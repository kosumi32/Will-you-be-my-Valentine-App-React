import "../css/LovePage.css";
import kissing from "../assets/images/shanelle-hello-kitty.gif"

export default function LovePage() {
  return (
    <div className="love-page">
      <img src= {kissing} alt="Loving-Gif"/>
      <h1 className= "confession">I love you!! ❤️</h1>
      <p className="love-message">Thank you for being a part of my journey!</p>
    </div>
  );
}

