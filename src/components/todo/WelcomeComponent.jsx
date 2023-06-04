import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { retrieveHelloWorldBean } from './api/HelloWorldApiService'

function WelcomeComponent() {

    const { username } = useParams()

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
