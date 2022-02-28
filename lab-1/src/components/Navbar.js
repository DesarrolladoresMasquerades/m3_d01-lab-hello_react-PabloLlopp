import logo from "../images/ironhack-logo-xs.png"
import burger from "../images/menu-top-xs.png"
import "./navbar.css"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="iron-logo"></img>
            <img src={burger} alt="burger menu"></img>
        </nav>
    )
}