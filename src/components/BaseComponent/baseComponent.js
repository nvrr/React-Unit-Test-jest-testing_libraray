import React, { useState } from "react";

export const BaseComponent = ({ disabled }) => {
  const [clickedNumber, setClickedNumber] = useState(0);

  const onClick = () => {
    setClickedNumber(clickedNumber + 1);
  };

  return (
    <>
      <button 
        data-testid="baseButton" 
        onClick={onClick} 
        disabled={disabled}
      >
        Activations
      </button>
      {clickedNumber > 0 
        && <p data-testid="baseParagraph">{clickedNumber}</p>}
    </>
  );
};
