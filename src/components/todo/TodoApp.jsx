import { useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate, useParams, Link } from 'react-router-dom'
import './TodoApp.css'

export default function TotoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>

            <HeaderComponent />
                <Routes>
                    <Route path='/' element={<LoginComponent />} />
                    <Route path='/login' element={<LoginComponent />} />
                    <Route path='/welcome/:username' element={<WelcomeComponent />} />
                    <Route path='/todos' element={<ListTodosComponent />} />
                    <Route path='/logout' element={<LogoutComponent />} />

                    <Route path='/*' element={<ErrorComponent />} />
                </Routes>
            </BrowserRouter>

            <FooterComponent />
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
            <div>
                Manage You todos. - <Link to="/todos">Go Here</Link>
            </div>
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

function ListTodosComponent() {

    const today = new Date();
    const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDay())

    const todos = [
                    {id: 1, description: 'Lean AWS', done: false, targetDate: targetDate},
                    {id: 2, description: 'Lean Java', done: false, targetDate: targetDate},
                    {id: 3, description: 'Lean C++', done: false, targetDate: targetDate},
                ]

    return (
        <div className='ListTodosComponent'>
            <h1>Things you want to do!</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>description</td>
                            <td>is Done?</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toDateString()}</td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function HeaderComponent() {
    return (
        <div className='HeaderComponent'>
            Header <hr/>
        </div>
    )
}

function FooterComponent() {
    return (
        <div className='FooterComponent'>
            <hr/> Footer
        </div>
    )
}

function LogoutComponent() {
    return (
        <div className='LogoutComponent'>
            <h1>you are logged out!</h1>
            <div>
                Thank you for using App. Come back soon!
            </div>
        </div>
    )
}
