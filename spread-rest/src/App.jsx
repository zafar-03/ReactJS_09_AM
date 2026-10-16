
import './App.css'

function App({data}) {
  return (
    <>
      <h1>Hello {data[1].fname}</h1>
      <h2>Lastname : {data[1].lname} </h2>
    </>
  )
}

// function App({fname,lname}) {
  
//   return (
//     <h1>Hello {fname} {lname}</h1>
//   )
// }

export default App
