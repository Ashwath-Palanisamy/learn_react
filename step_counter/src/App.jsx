import React, { useState } from "react";
import './App.css'

function App(){

  const [number, addNumber] = useState(0);
  const [step,setStep] = useState('');

  function handleSubmit() {
    addNumber(number + parseInt(step, 10));
  }


  return(
    <>
    <p>Current number: {number}</p>
    
    <label>Write number to add to current value: <input placeholder={number} id='step' type="number" onChange={(e) => setStep(e.target.value)}></input></label>
    <br/>
    <button className="button" onClick={handleSubmit}>Add</button>
    </>
  )
}

export default App;