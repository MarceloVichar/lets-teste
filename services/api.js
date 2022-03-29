import axios from 'axios'

axios({
        method: 'get',
        url: 'https://gateway.marvel.com/v1/public'
    })
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })

//const apiKey = '198de2a64847913fc77d58fd589a08b4';