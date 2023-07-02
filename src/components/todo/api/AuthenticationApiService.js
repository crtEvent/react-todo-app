import {apiClient} from './ApiClient'

export const exucuteJwtAuthenticationService
    = (username, password) => 
        apiClient.post(`/authenticate`, {username, password}
)