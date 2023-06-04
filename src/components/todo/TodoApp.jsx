import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LoginComponent from './LoginComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import ListTodosComponent from './ListTodosComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import AuthProvider, { useAuth } from './security/AuthContext'

import './TodoApp.css'

function AuthenticatedRoute({children}) {
    const authContenxt = useAuth()
    
    if(authContenxt.isAuthenticated)
        return children

    return <Navigate to="/" />
}

export default function TotoApp() {
    return (
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path='/' element={<LoginComponent />} />
                        <Route path='/login' element={<LoginComponent />} />
                        <Route path='/welcome/:username' element={<AuthenticatedRoute><WelcomeComponent /></AuthenticatedRoute>} />
                        <Route path='/todos' element={<AuthenticatedRoute><ListTodosComponent /></AuthenticatedRoute>} />
                        <Route path='/logout' element={<AuthenticatedRoute><LogoutComponent /></AuthenticatedRoute>} />

                        <Route path='/*' element={<ErrorComponent />} />
                    </Routes>
                    <FooterComponent />
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}
