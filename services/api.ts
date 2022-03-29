import axios from 'axios'


export function list() {
    return axios({
        method: 'GET',
        url: 'https://gateway.marvel.com/v1/public'
    })
    .then(response => {
        return response
    })
    .catch(error => {
        return error
    })
}


//const apiKey = '198de2a64847913fc77d58fd589a08b4';
