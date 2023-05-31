import { useState } from 'react'
import './TodoApp.css'

export default function TotoApp() {
    return (
        <div className="TodoApp">
            Todo Management Application
            <LoginComponent />
        </div>
    )
}

function LoginComponent() {

    const [username, setUserName] = useState('admin')
    const [password, setPassword] = useState('1234')

    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)

    function handleUserNameChange(event) {
        setUserName(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    function handleSubmit() {
        if(username === 'admin' && password === '1234') {
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
        } else {
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }

    function SuccessMessageComponent() {
        if(showSuccessMessage) {
            return (
                <div className="successMessage">Authenticated Successfully</div>
            )
        }
        return null
    }
    

    function ErrorMessageComponent() {
        if(showErrorMessage) {
            return (
                <div className="errorMessage">Authenticated Failed. Please check your credentials</div>
            )
        }
        return null
    }

    return (
        <div className="Login">
            <SuccessMessageComponent />
            <ErrorMessageComponent />
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUserNameChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" password="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}
