import { Link } from "react-router-dom";
import "./Login.css";
import React, {useState} from "react";
import logo from "../assets/congo.png";

export default function Login() {
    const [form, setForm] = useState({
        email:"",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const sendSignIn = (email, password) => {
        console.log(password);
    }

    return (
        <div className="login-page">
            <img src={logo} alt="Logo" className= "logo" />
            <h1>Login</h1>
            <form onSubmit={(e) => {e.preventDefault(); sendSignIn(form.email, form.password)}}>
                <input type="email" name="email" placeholder="E-mail" onChange={(handleChange)} required/>
                <input type="password" name="password" placeholder="Password" onChange={(handleChange)} required/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
