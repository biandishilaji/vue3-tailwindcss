import axios from 'axios'


export const req = axios.create({
    baseURL: 'http://api_m',
    // timeout: 1000,
    headers: {'X-Requested-With': 'XMLHttpRequest'},
});
