import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Nav.css";

export default function Nav() {
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search/${encodeURIComponent(searchQuery.trim())}`);
            setSearchQuery(""); // Clear search input after navigation
        }
    };

    return (
        <nav className="nav-container">
            <div className="flex justify-between items-center">
                <Link to="/" className="nav-brand">
                    <span className="nav-brand-highlight">Mini</span> Market
                </Link>
                <div className="nav-search-container">
                    <form onSubmit={handleSearch} className="flex">
                         <input 
                             type="text" 
                             placeholder="Search products..."
                             className="nav-search-input"
                             value={searchQuery}
                             onChange={(e) => setSearchQuery(e.target.value)}
                             onFocus={() => setIsSearchFocused(true)}
                             onBlur={() => setIsSearchFocused(false)}
                         />
                         <button 
                             type="submit" 
                             className={`nav-search-button ${isSearchFocused ? 'nav-search-button-focused' : ''}`}
                         >
                             <i className="bi bi-search"></i>
                         </button>
                    </form>
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