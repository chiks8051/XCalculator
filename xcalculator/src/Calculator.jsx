import React, { useState } from "react";

const Calculator = () => {
  const [buttonText, setButtonText] = useState("");
  const [answer, setAnswer] = useState("");

  const handleNumber = (event) => {
    setButtonText((prevInput) => prevInput + event.target.textContent);
 };

  const clearInput = () => {
    setButtonText("");
    setAnswer("");
  };

  const calculateResult = () => {
    try {
      const result = eval(buttonText); 
      setAnswer(result.toString()); 
    } catch (error) {
      setAnswer("Error"); 
    }
  };

  return (
    <div className="container">
      <h1>React Calculator</h1>
      <form action="">
        <input type="text" value={buttonText} readOnly />
      </form>
      <p>{answer}</p>
      <button onClick={handleNumber}>7</button>
      <button onClick={handleNumber}>8</button>
      <button onClick={handleNumber}>9</button>
      <button onClick={handleNumber}>+</button>
      <br />
      <button onClick={handleNumber}>4</button>
      <button onClick={handleNumber}>5</button>
      <button onClick={handleNumber}>6</button>
      <button onClick={handleNumber}>-</button>
      <br />
      <button onClick={handleNumber}>1</button>
      <button onClick={handleNumber}>2</button>
      <button onClick={handleNumber}>3</button>
      <button onClick={handleNumber}>*</button>
      <br />
      <button onClick={clearInput}>C</button>
      <button onClick={handleNumber}>0</button>
      <button onClick={calculateResult}>=</button>
      <button onClick={handleNumber}>/</button>
    </div>
  );
};

export default Calculator;
