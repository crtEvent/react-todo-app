import { useParams, Link } from 'react-router-dom'
//import { useAuth } from './security/AuthContext';

function WelcomeComponent() {

    const { username } = useParams()
    //const authContext = useAuth()
    //const [message, setMessage] = useState(null)

    return (
        <div className='WelcomeComponent'>
            <h1>Welcome! { username }</h1>
            <div>
                Manage You todos. - <Link to="/todos">Go Here</Link>
            </div>
        </div>
    )
}

export default WelcomeComponent
