import React, { useState } from "react";

function App() {

  const [Text, setText] = useState("")
  const [items, setItems] = useState([])

  function handleChange(event) {
    const value = event.target.value
    setText(value)
  }

  function handleClick(event) {
    event.preventDefault();
    setItems(prevValue => {
      return [...prevValue, Text]
    })
    setText("");
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <form>
        <input onChange={handleChange} type="text" placeholder="Enter Task" value={Text} />
        <button onClick={handleClick} >Submit</button>
        <ul>
          {items.map(item => {
            return(<li>{item}</li>);
          })}
        </ul>
      </form>
    </div>
  );
}

export default App;
