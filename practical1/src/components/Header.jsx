const mystyle = {
    navbar : {
        backgroundColor : "darkslategray",
        fontFamily : "calibri",
        color : "white",
        display : "flex",
        padding : "10px 50px",
        justifyContent : "space-between",
        alignItems : "center"
    },
    mymenu : {
         display : "flex",
        padding : "10px 50px",
        justifyContent : "space-between",
        alignItems : "center",
        gap : "30px"
    }
};
function Header(){
    return (
        <nav style={mystyle.navbar}>
            <div>Logo</div>
            <div>
                <ul style={mystyle.mymenu}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Service</li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;