import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import React, {useState, useEffect} from "react";
import logo from "../assets/congo.png";
import { useAuth } from "../context/AuthContext";

export default function Register() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirm: "",
        agree: false,
    });
    
    const { register, loading, error, clearError, isAuthenticated } = useAuth();
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

        // Validate passwords match
        if (form.password !== form.confirm) {
            return;
        }

        // Validate terms agreement
        if (!form.agree) {
            return;
        }

        const result = await register(form.name, form.email, form.password, form.confirm);
        
        if (result.success) {
            navigate("/");
        }
    }

    return (
        <div className="login-page">
            <img src={logo} alt="Logo" className="logo" />
            <h1>Register</h1>
            {error && (
                <div className="error-message" style={{color: 'red', marginBottom: '10px', fontSize: '14px'}}>
                    {error}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input 
                        type="text" 
                        id="name"
                        name="name" 
                        className="name" 
                        placeholder="Enter your full name" 
                        value={form.name} 
                        onChange={handleChange} 
                        required
                        disabled={loading}
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input 
                        type="email" 
                        id="email"
                        name="email" 
                        className="email" 
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
                        className="password" 
                        placeholder="Create a password" 
                        value={form.password} 
                        onChange={handleChange} 
                        required
                        disabled={loading}
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="confirm" className="form-label">Confirm Password</label>
                    <input 
                        type="password" 
                        id="confirm"
                        name="confirm" 
                        className="confirm" 
                        placeholder="Confirm your password" 
                        value={form.confirm} 
                        onChange={handleChange} 
                        required
                        disabled={loading}
                    />
                    {form.password && form.confirm && form.password !== form.confirm && (
                        <div style={{color: 'red', fontSize: '12px', marginTop: '5px'}}>
                            Passwords do not match
                        </div>
                    )}
                </div>
                
                <div className="form-group">
                    <label className="checkbox-label">
                        <input 
                            type="checkbox" 
                            name="agree" 
                            className="agree" 
                            checked={form.agree} 
                            onChange={handleChange} 
                            required
                            disabled={loading}
                        />
                        <span className="checkbox-text">I agree to the terms and conditions.</span>
                    </label>
                </div>
                
                <button type="submit" disabled={loading || form.password !== form.confirm || !form.agree}>
                    {loading ? "Registering..." : "Register"}
                </button>
            </form>
            <p style={{marginTop: '15px', textAlign: 'center'}}>
                Already have an account? <Link to="/login">Login here</Link>
            </p>
        </div>
    );
}