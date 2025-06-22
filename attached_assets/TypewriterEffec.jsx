import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ text, speed = 100, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={`${className} border-r-2 border-blue-400 animate-pulse`}>
      {displayedText}
    </span>
  );
};

export default TypewriterEffect;
