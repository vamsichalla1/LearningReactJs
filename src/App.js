import { useState } from 'react';
import './App.css';
import Keypad from "./keypad"


function App() {
  let [input,setInput] = useState("")

  function handleClick(value){
    setInput(input + value)
  }
  function calculate(value){
    let outputVal = eval(input)
    setInput(outputVal)
  }

  function handleClear() {
    setInput("")
  }
  return(
  
    <div className="container mt-5 w-50">
      <h1 className="text-center">Calculator App using React</h1>
      <div className="calculator">
        <input type="text"  value={input} className="output" readOnly />
        <Keypad handleClick={handleClick} handleClear={handleClear}calculate={calculate}></Keypad>

      </div>
    </div>
    
  )
}

export default App;
