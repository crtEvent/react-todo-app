import { useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import './TodoApp.css'

export default function TotoApp() {
    return (
        <div className="TodoApp">
            Todo Management Application
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent />}></Route>
                    <Route path='/login' element={<LoginComponent />}></Route>
                    <Route path='/welcome/:username' element={<WelcomeComponent />}></Route>
                    <Route path='/*' element={<ErrorComponent />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

function LoginComponent() {

    const [username, setUserName] = useState('admin')
    const [password, setPassword] = useState('1234')

    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate();

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
            navigate(`/welcome/${username}`)
        } else {
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }

    return (
        <div className="Login">
            <h1>Time to login!!</h1>
            {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>}
            {showErrorMessage && <div className="errorMessage">Authenticated Failed. Please check your credentials</div>}
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

function WelcomeComponent() {

    const { username } = useParams()
    console.log(username)

    return (
        <div className='WelcomeComponent'>
            <h1>Welcome! { username }</h1>
            TODO
        </div>
    )
}

function ErrorComponent() {
    return (
        <div className='ErrorComponent'>
            <h1>We are working really hard!</h1>
            <div>
                Apologies for the 404. Reach out to our team at admin@email.cs
            </div>
        </div>
    )
}