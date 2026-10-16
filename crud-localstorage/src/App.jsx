import { useEffect, useState } from "react";
import "./App.css";
import { Route,Routes, useNavigate } from "react-router-dom";
import Display from  "./Display";


function Home(){
  const [fname,setFname] = useState("");
  const [lname,setLname] = useState("");
  const [age,setAge] = useState(0);
  const [formdata,setFormdata] = useState(null);
  const navigate = useNavigate();
  

  useEffect(()=>{
    if( formdata==null)
      return;

    localStorage.setItem("cruddata",JSON.stringify(formdata));
    navigate("/display");
  },[formdata]);

  const handleSubmit = ()=>{
    setFormdata({
      fname : fname,
      lname : lname,
      age : age
    });
  }
  return (
    <>
      <div className="form-container">
        <h2>Student Form</h2>
        <form>
          <label htmlFor="firstname">First Name</label>
          <input type="text" id="firstname" name="firstname" placeholder="Enter First Name" onChange={(e)=>{setFname(e.target.value)}} />
          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastname" name="lastname" placeholder="Enter Last Name" onChange={(e)=>{setLname(e.target.value)}} />
          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age" placeholder="Enter Age" onChange={(e)=>{setAge(e.target.value)}} />
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </>
  )
}


function App() {

  return (
    <>
      <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/display" element={<Display/>}/>
        </Routes>
      </>
    </>
  )
}

export default App
