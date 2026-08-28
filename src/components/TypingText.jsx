import React, { useState, useEffect } from 'react';

const TypingText = ({ roles, speed = 100, deleteSpeed = 50, pauseDuration = 2000 }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setCurrentText(fullText.substring(0, currentText.length + 1));
        
        if (currentText === fullText) {
          // Pause at full word before deleting
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Deleting backward
        setCurrentText(fullText.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles, speed, deleteSpeed, pauseDuration]);

  return (
    <span className="typing-container" style={{ color: '#FD6F00', display: 'inline-block' }}>
      {currentText}
      <span className="typing-cursor"></span>
    </span>
  );
};

export default TypingText;
