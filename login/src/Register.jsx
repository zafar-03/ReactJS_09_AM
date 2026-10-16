import { useEffect } from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom"

function Register(){
    const navigate = useNavigate();
    const [uname,setUname] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [userdata,setUserData] = useState(null);

    const handleSubmit = () =>{
        setUserData({
            username : uname,
            email : email,
            password : password
        });

        navigate("/home");
    }

    useEffect(()=>{
        if(userdata==null)
            return;
        localStorage.setItem("userData",JSON.stringify(userdata));
        localStorage.setItem("login",JSON.stringify({islogin : true}));
    },[userdata]);

     return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">

          <div className="card shadow">
            <div className="card-body p-4">

              <h2 className="text-center mb-4">Register</h2>

              <form>
                {/* Username */}
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter username"
                    onChange={(e)=>{setUname(e.target.value)}}
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    onChange={(e)=>{setEmail(e.target.value)}}
                  />
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    onChange={(e)=>{setPassword(e.target.value)}}
                  />
                </div>

                {/* Button */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                    Register
                  </button>
                </div>

                <div>
                    <p>You've already an Account ? <a href="login">Sign In</a></p>
                </div>

              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Register;