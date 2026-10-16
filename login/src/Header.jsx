import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
    let islogin = JSON.parse(localStorage.getItem("login")).islogin;
    const navigate = useNavigate();
    
    useEffect(()=>{
        console.log("Here");
    },[islogin]);
    return (
        <header className="bg-dark text-white p-3">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <h3 className="mb-0">MyWebsite</h3>
                    <form>
                        {
                        (islogin)
                            ?
                            <div>
                                <button onClick={()=>{navigate("/logout")}} className="btn btn-danger"> Logout </button>
                            </div>
                            :
                            <div>
                                <button href="register" className="btn btn-outline-light me-2"> Sign Up </button>
                                <button href="login" className="btn btn-primary"> Sign In </button>
                            </div>
                    }
                    </form>
                </div>
            </div>
        </header>
    )
}

export default Header;