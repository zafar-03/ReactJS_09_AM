import { Routes,Route } from "react-router-dom";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import Login from "./pages/Login";
import { Protectedroute } from "./utils/validation"; 
import "./index.css";

function App() {

  return (
    <>

        <Routes>
          <Route path="/" element={
            <Protectedroute>
              <EmployeeDashboard/>
            </Protectedroute>
          }/>
          <Route path="/login" element={<Login/>}/>
        </Routes>

    </>
  )
}

export default App
