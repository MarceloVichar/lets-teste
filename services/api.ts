import axios from 'axios'

const http = axios.create({
 baseURL: "http://gateway.marvel.com/v1/public",
 params: {
    apikey: '198de2a64847913fc77d58fd589a08b4',
    ts: '1',
    hash: 'a1e2c32a6c1f85326cc37f0fe92b63c1'
}
});

interface list {
    params: Object
}

export default {
    list:(params: list) => {
        console.log(params)
        return http.get('characters', {params}).then(res => res.data )
}
}
//const apiKey = '198de2a64847913fc77d58fd589a08b4';
