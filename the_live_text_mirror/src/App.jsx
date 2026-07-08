import React from "react";
import { useState } from "react";



function App(){
  const [text,setText] = useState('')

function updateText(e){
  setText(e)  
}

  return(
    <>
    <label> The live text mirror 
      <input type="text" onChange={(e)=> updateText(e.target.value)}></input>
    </label>
    <p>The text is: {text}</p>
    </>
  )
}

export default App;