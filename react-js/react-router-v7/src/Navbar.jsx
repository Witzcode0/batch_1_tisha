import { Link } from "react-router-dom"
import "./style.css"

function Navbar() {
  return (
    <>
        <div className="header container">
            <div className="logo">
                <h3>Logo.</h3>
            </div>
            <div className="menus">
                <ul>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/services" className="nav-link">Services</Link>
                    <Link to="/blog" className="nav-link">Blog</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/contact" className="nav-link">contact</Link>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar