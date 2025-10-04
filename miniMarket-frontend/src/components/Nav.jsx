import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
    return (
        <nav className="nav-container">
            <div className="flex justify-between items-center">
                <Link to="/" className="nav-brand">
                    <span className="nav-brand-highlight">Mini</span> Market
                </Link>
                <div className="nav-search-container">
                    <div className="flex">
                         <input 
                             type="text" 
                             placeholder="Search products..."
                             className="nav-search-input"
                         />
                         <button className="nav-search-button">
                             <i className="bi bi-search"></i>
                         </button>
                    </div>
                </div>
                
                <div className="nav-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/cart" className="nav-link">Cart</Link>
                    <Link to="/login" className="nav-link">Login</Link>
                    <Link to="/register" className="nav-link">Register</Link>
                </div>
            </div>
        </nav>
    );
}