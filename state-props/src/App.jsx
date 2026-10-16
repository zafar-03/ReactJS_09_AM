import About from "./components/About";
import Home from "./components/Home";


function App() {
 
  return (
      <>
        <Home data1="Home Data1" data2="data2" data3="Data3"/>
        <About fname="Raj" lname="shah" age={12}/>
      </>
  )
}

export default App
