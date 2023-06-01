export default class RegisterService {
    
    static async userRegister(body)
    {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        };
        return await fetch('user/register', requestOptions).then(response => response.json()).then(data => console.log(data));
    }
}
