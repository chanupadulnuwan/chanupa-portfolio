import React from 'react';
import './SpecularButton.css';

const SpecularButton = ({
  children,
  onClick,
  className = '',
  textColor = '#FD6F00'
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`specular-button-css ${className}`}
      style={{ color: textColor }}
    >
      <span className="specular-shine" />
      <span className="specular-content">{children}</span>
    </button>
  );
};

export default SpecularButton;
