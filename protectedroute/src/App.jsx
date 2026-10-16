import { Route,Routes } from "react-router-dom"
import Login from "./Login"
import Dashboard from "./Dashboard"

function Protectedroute({ children }){
  if (!localStorage.getItem("token")){
    location.href = "/";
    return;
  }
    return children;
}
function About(){
  return <h1>About Page</h1>
}
function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={
          <Protectedroute>
            <Dashboard/>
          </Protectedroute>}/>
          <Route path="/about" element={
          <Protectedroute>
            <About/>
          </Protectedroute>}/>
      </Routes>
    </>
  )
}

export default App
