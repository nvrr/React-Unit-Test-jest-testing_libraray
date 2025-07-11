import React, { useState } from "react";

export const BaseComponent = ({ disabled, setValue }) => {
  const [clickedNumber, setClickedNumber] = useState(0);

  const onClick = () => {
    setClickedNumber(clickedNumber + 1);
  };

  const handleChange=(e) => {
    setValue(e.target.value)
  }

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

        <div>
        <label>Value:

<input type="text" onChange={(e) => handleChange(e)} />
</label>
        </div>
    </>
  );
};
