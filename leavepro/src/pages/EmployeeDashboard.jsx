import { logout } from "../utils/validation";

function EmployeeDashboard(){
    return (
        <>
        <h1>EmployeeDashboard</h1>
        <button onClick={()=>{logout()}}>Logout</button>
        </>
    )
}

export default EmployeeDashboard;