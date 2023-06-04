import { createContext, useContext, useState } from "react";

// 1. Create Context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

// 2. share the created context with other components
export default function AuthProvider({ children }) {
    
    // Put some state in the context
    const [isAuthenticated, setAuthenticated] = useState(false)

    function login(username, password) {
        if(username === 'admin' && password === '1234') {
            setAuthenticated(true)
            return true
        } else {
            setAuthenticated(false)
            return false
        }
    }

    function logout() {
        setAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={ {isAuthenticated, login, logout} }>
            {children}
        </AuthContext.Provider>
    )
}