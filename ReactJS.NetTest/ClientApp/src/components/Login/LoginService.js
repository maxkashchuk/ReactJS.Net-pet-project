import axios from 'axios'

export default class LoginService {
    static async Login()
    {
        return await axios.get('https://swapi.dev/api/people/');
    }
}
