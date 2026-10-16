function Display(){
    const userdata = JSON.parse(localStorage.getItem("cruddata"));
    return (
        <>
            <p>{userdata.fname}</p>
            <p>{userdata.lname}</p>
            <p>{userdata.age}</p>

        </>
    )
}   


export default Display;