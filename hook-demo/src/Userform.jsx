import { useEffect, useState } from "react";
import "./Userform.css";
import {MdEmail } from "react-icons/md";

function Userform(){
    const [fullname,setFullName] = useState("");
    const [email,setEmail] = useState("");
    const [pnumber,setPNumber] = useState(0);
    const [notes,setNotes] = useState("");
    const [cv,setCv] = useState("");

    const [formData,setFormData] = useState(null);

    const handleSubmit = ()=>{
        setFormData({
            fname : fullname,
            email : email,
            pnumber : pnumber,
            notes : notes,
            cv : cv 
        });

        console.log(formData);
    }


   useEffect(()=>{
        if (formData!= null)
            localStorage.setItem("formData",JSON.stringify(formData));
   },[formData]);

    return (
        <>
            <section>
                <form>
                    <div style={{color:"gray",fontStyle: "italic",fontSize : "32px"}}>
                        Logo
                    </div>
                    <div style={{fontSize:"42px",fontFamily: "cursive"}}>
                        Vacancy Application
                    </div>
                    <div style={{fontSize:"16px",color:"gray",fontStyle: "italic"}}>
                        Enter Web Form Description 
                    </div>
                    <div className="form-field">
                        <main>
                            <MdEmail style={{position:"absolute",top:"12px",left:"15px"}} color="gray" size={"18px"}/>
                            <input type="text" placeholder="Full Name" onChange={(e)=>{setFullName(e.target.value)}} />
                        </main>
                        <main>
                            <MdEmail style={{position:"absolute",top:"12px",left:"15px"}} color="gray" size={"18px"}/>
                            <input type="text" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                        </main>
                        <main>
                              <MdEmail style={{position:"absolute",top:"12px",left:"15px"}} color="gray" size={"18px"}/>
                            <input type="text" placeholder="Phone Number" onChange={(e)=>{setPNumber(e.target.value)}}/>
                        </main>
                        <main>
                              <MdEmail style={{position:"absolute",top:"12px",left:"15px"}} color="gray" size={"18px"}/>
                            <input type="text" placeholder="Notes" onChange={(e)=>{setNotes(e.target.value)}}/>
                        </main>
                        <main>
                              <MdEmail style={{position:"absolute",top:"12px",left:"15px"}} color="gray" size={"18px"}/>
                            <input type="text" placeholder="(CV)" onChange={(e)=>{setCv(e.target.value)}}/>
                        </main>
                        <main>
                            <button onClick={handleSubmit}>Add Field</button>
                            <button>Add Field Section</button>
                        </main>
                    </div>
                </form>
            </section>
        </>
    )
}   

export default Userform;