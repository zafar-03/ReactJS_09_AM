import {Routes,Route} from "react-router-dom"
import Header from "./Header"
import Login from "./Login"
import Register from "./Register"
import Home from "./Home"
import Logout from "./Logout"

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<Logout/>}/>
      </Routes>

    </>
  )
}

export default App
