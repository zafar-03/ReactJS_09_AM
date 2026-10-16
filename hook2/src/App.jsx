import { useEffect, useState } from "react"

function App() {
  const [count,setCount] = useState(0);
  const [data,setData] = useState(0);


  // 1. execute on every render
  useEffect(()=>{
    console.log("UseEffeect Running");
  });

  // 2. once
  useEffect(()=>{
    console.log("UseEffect running Once.");
  },[]);

  // 3. depandancy 
  useEffect(()=>{
    console.log("Data Changed.");
  },[data]);

  return (
   <>
     <h1>Hello</h1>
    <p>Count : {count}  </p>
    <p>Data : {data}</p>

    <button onClick={()=>{setCount(count+1)}}>Count</button>
    <button onClick={()=>{setData(data+10)}}>Data</button>

   </>
  )
}

export default App
