import React, { useState, useEffect } from 'react';

const TypingText = ({ roles = [], speed = 100, deleteSpeed = 50, pauseDuration = 2000 }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!roles || roles.length === 0) return;

    const fullText = roles[currentRoleIndex] || '';

    let timer;

    if (!isDeleting && currentText === fullText) {
      // Pause at full word before deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && currentText === '') {
      // Move to next word
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      // Step character by character
      timer = setTimeout(() => {
        const nextText = isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1);
        setCurrentText(nextText);
      }, isDeleting ? deleteSpeed : speed);
    }

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
