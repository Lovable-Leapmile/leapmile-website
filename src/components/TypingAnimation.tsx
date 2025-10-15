import { useState, useEffect } from "react";

interface TypingAnimationProps {
  text: string;
  separator?: string;
  typingSpeed?: number;
  wordDelay?: number;
  className?: string;
}

const TypingAnimation = ({ 
  text, 
  separator = " · ",
  typingSpeed = 100,
  wordDelay = 300,
  className = ""
}: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  
  const words = text.split(separator);

  useEffect(() => {
    // Reset on mount (page refresh)
    setDisplayedText("");
    setCurrentWordIndex(0);
    setCurrentCharIndex(0);
  }, []);

  useEffect(() => {
    if (currentWordIndex >= words.length) return;

    const currentWord = words[currentWordIndex];
    
    if (currentCharIndex < currentWord.length) {
      // Type characters one by one
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + currentWord[currentCharIndex]);
        setCurrentCharIndex(prev => prev + 1);
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    } else {
      // Move to next word after delay
      const timeout = setTimeout(() => {
        if (currentWordIndex < words.length - 1) {
          setDisplayedText(prev => prev + separator);
        }
        setCurrentWordIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, wordDelay);
      
      return () => clearTimeout(timeout);
    }
  }, [currentCharIndex, currentWordIndex, words, typingSpeed, wordDelay, separator]);

  return (
    <span className={className}>
      {displayedText}
      {currentWordIndex < words.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
};

export default TypingAnimation;
