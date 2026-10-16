import { useState } from "react";

function Demo(){
    const [age,setAge] = useState(0);
    const [fname,setFname] = useState("Raj");
    const [lname,setLname] = useState("Shah");
    const [is18,setIs18] = useState(false);

    return (
        <>
            <div>
                <button onClick={()=>{setFname(prompt('Enter Your First Name: '))}}>Set Firstname</button>
                <button onClick={()=>{setLname(prompt('Enter Your Last Name: '))}}>Set Lastname</button>
                <button onClick={()=>{setAge(prompt('Enter Your Age: '))}}>Set Age</button>
                <button onClick={()=>{setIs18(age>=18)}}>Check 18+</button>
            </div>
            <h1>FullName : {fname} {lname}</h1>
            <h2>Age : {age}</h2>
            <h3>is18 : {(is18) ? "True" : "False" }</h3>
        </>
    )
}

export default Demo;

