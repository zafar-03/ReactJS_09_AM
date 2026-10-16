import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    const handleSubmit = ()=>{
        localStorage.setItem("token","1234");
        navigate("/dashboard");
    }
    return (
        <>
        <h1>Sign In</h1>
        <form>
            <input type="text" placeholder="Enter your username" />
            <br />
            <input type="password" placeholder="Enter your Password" />
            <br />
            <button onClick={handleSubmit}>Login</button>
        </form>
        </>
    )
}
export default Login;