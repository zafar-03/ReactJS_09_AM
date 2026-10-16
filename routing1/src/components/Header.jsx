import { Link } from "react-router-dom"

function Header() {
    return (
        <header className="site-header">
            <div className="site-identity">
                <h1><Link className="link-header" to="/"> <img src="https://i.ibb.co/QDy827D/ak-logo.png" width="100px" className="bg-black" alt="logo" /></Link></h1>
            </div>
            <nav className="site-navigation">
                <ul className="nav">
                    <li><Link className="link-header" to="/about">About</Link></li>
                    <li><Link className="link-header" to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;