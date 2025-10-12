import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const API_BASE_URL = "http://127.0.0.1:8000/api";

    // Check if user is logged in on app start (load from localStorage)
    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            try {
                setUser(JSON.parse(savedUser));
            } catch (e) {
                console.error("Error parsing saved user data:", e);
                localStorage.removeItem("user");
            }
        }
    }, []);

    const login = async (email, password) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`${API_BASE_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                const userData = data.user;
                
                // Save user data to state and localStorage
                setUser(userData);
                localStorage.setItem("user", JSON.stringify(userData));
                
                return { success: true, user: userData };
            } else {
                const data = await response.json();
                const errorMessage = data.message || "Login failed";
                setError(errorMessage);
                return { success: false, error: errorMessage };
            }
        } catch (error) {
            const errorMessage = "Cannot connect to server. Please make sure the backend is running.";
            setError(errorMessage);
            return { success: false, error: errorMessage };
        } finally {
            setLoading(false);
        }
    };

    const register = async (name, email, password, password_confirmation) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`${API_BASE_URL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({ name, email, password, password_confirmation }),
            });

            if (response.ok) {
                const data = await response.json();
                const userData = data.user;
                
                // Save user data to state and localStorage
                setUser(userData);
                localStorage.setItem("user", JSON.stringify(userData));
                
                return { success: true, user: userData };
            } else {
                const data = await response.json();
                let errorMessage = "Registration failed";
                if (data.errors) {
                    // Handle Laravel validation errors
                    const errorKeys = Object.keys(data.errors);
                    if (errorKeys.length > 0) {
                        errorMessage = data.errors[errorKeys[0]][0];
                    }
                } else if (data.message) {
                    errorMessage = data.message;
                }
                setError(errorMessage);
                return { success: false, error: errorMessage };
            }
        } catch (error) {
            const errorMessage = "Cannot connect to server. Please make sure the backend is running.";
            setError(errorMessage);
            return { success: false, error: errorMessage };
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        // Simple logout - just clear user data
        setUser(null);
        localStorage.removeItem("user");
    };

    const isAuthenticated = () => {
        return !!user;
    };

    const clearError = () => {
        setError(null);
    };

    const value = {
        user,
        loading,
        error,
        login,
        register,
        logout,
        isAuthenticated,
        clearError,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
