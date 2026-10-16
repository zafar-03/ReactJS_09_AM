import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Aboutpage from "./components/Aboutpage";
import Contactpage from "./components/Contactpage";
import "./App.css";

import { Route,Routes } from "react-router-dom"




function App() {
  return (
    <>
      <Header/>

        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<Aboutpage/>}/>
          <Route path="/contact" element={<Contactpage/>}/>
        </Routes>


      <Footer/>
    </>
  )
}

export default App
