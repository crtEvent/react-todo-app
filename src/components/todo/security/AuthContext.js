import { createContext, useContext, useState } from "react";

// 1. Create Context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

// 2. share the created context with other components
export default function AuthProvider({ children }) {
    
    // Put some state in the context
    const [isAuthenticated, setAuthenticated] = useState(false)

    return (
        <AuthContext.Provider value={ {isAuthenticated, setAuthenticated} }>
            {children}
        </AuthContext.Provider>
    )
}