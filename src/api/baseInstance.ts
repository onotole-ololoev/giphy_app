import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs/'
})
// const Key = 'NoW0NSD2bX3VxiiqA297sHPNso5Nc97q'