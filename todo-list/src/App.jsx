import React, { useState } from "react";

function App(){

  const [Todo,setTodo] = useState([]);
  const [Text,SetText] = useState("");

  function updateTodo(){
    setTodo([...Todo, Text]);
  }

  return (
    <>
      <h1>To do List</h1>
      <input placeholder="Enter todo" id="input-box" onChange={(e)=> SetText(e.target.value)}/>
      <button onClick={updateTodo}>submit</button>

      <h2>Added To do:</h2>
      <ul>{Todo.map((item)=><li key={item}>{item}</li>)}</ul>
    </>
  )
}

export default App;