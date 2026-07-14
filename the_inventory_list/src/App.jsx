import React from "react";

function App(){
  const array = ["Iron Sword", "Shield", "Health Potion"];

  return (
    <>
    <ul>
      {array.map((item)=> (<li key={item}>{item}</li>))}
    </ul>
    </>
  )
}

export default App;