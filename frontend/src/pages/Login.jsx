import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import React, {useState, useEffect} from "react";
import logo from "../assets/congo.png";
import { useAuth } from "../context/AuthContext";

export default function Login() {
    const [form, setForm] = useState({
        email:"",
        password: ""
    });
    
    const { login, loading, error, clearError, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    // Redirect if already logged in
    useEffect(() => {
        if (isAuthenticated()) {
            navigate("/");
        }
    }, [isAuthenticated, navigate]);

    // Clear error when component mounts
    useEffect(() => {
        clearError();
    }, [clearError]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        clearError();
        
        const result = await login(form.email, form.password);
        
        if (result.success) {
            navigate("/");
        }
    }

    return (
        <div className="login-page">
            <img src={logo} alt="Logo" className="logo" />
            <h1>Login</h1>
            {error && (
                <div className="error-message" style={{color: 'red', marginBottom: '10px', fontSize: '14px'}}>
                    {error}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input 
                        type="email" 
                        id="email"
                        name="email" 
                        placeholder="Enter your email address" 
                        value={form.email}
                        onChange={handleChange} 
                        required
                        disabled={loading}
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input 
                        type="password" 
                        id="password"
                        name="password" 
                        placeholder="Enter your password" 
                        value={form.password}
                        onChange={handleChange} 
                        required
                        disabled={loading}
                    />
                </div>
                
                <button type="submit" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>
            <p style={{marginTop: '15px', textAlign: 'center'}}>
                Don't have an account? <Link to="/register">Register here</Link>
            </p>
        </div>
    );
}
