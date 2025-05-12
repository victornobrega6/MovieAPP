import axios from 'axios'



export const api = axios.create({
    baseURL: "http://api.themoviedb.org/3",
    params: {
        api_key: "a56e61ff1417083b3eeb269e2c4bef2b",
        language: "pt-BR",
        include_adult: false,
    }
})