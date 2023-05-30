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

    function handleUserNameChange(event) {
        setUserName(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    return (
        <div className="Login">
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
                    <button type="button" name="login">Login</button>
                </div>
            </div>
        </div>
    )
}
