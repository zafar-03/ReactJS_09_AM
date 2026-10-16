import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';


import './App.css'

const cssData = {
  color : "blue",
  fontFamily : "cursive"
};

function App() {
  const fname = "Sahil";
  return (
    <>
    {/*<h1>Hello</h1>
    dfghjk
    dfg
    
    */}
    {/* <label htmlFor=""></label>
    <h2 class="er">fghj</h2> */}

    {/* <h1 style={{color:"red",fontSize:"100px"}}>Hello {fname}</h1> */}
    <h1 style={cssData}>Hello {fname}</h1>
    </>
    
  )
}




export default App




