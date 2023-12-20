import React, { useEffect, useState } from "react";
import './style.scss'

const HomePage = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [speed] = useState(300);
  const fullText = 'Welcome';

  useEffect(() => {
    const typeWriter = () => {
      if (index < fullText.length) {
        setText((prevText) => prevText + fullText.charAt(index));
        console.log(fullText.charAt(index));
        setIndex((prevIndex) => prevIndex + 1);
      }
    };

    setTimeout(typeWriter, speed);
  }, [index, speed, fullText]);

  return (
    <div className="home_text">
      <h1 id="text">{text}</h1>
    </div>
  );
};

export default HomePage;
