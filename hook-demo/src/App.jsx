import { useState } from "react"

function App() {
  const [count,setCount] = useState(0);
  // const [age,setAge] = useState();


  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Increment</button>
      <button onClick={()=>{setCount(0)}}>Reset</button>
      <button onClick={()=>{setCount(count-1)}}>Decrement</button>
      <button onClick={()=>{setCount(prompt("Enter Value"))}}>Custom</button>
    </>
  )
}

export default App
