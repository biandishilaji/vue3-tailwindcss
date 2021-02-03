import axios from 'axios'


export const req = axios.create({
    baseURL: 'http://api.bookcase.local',
    // timeout: 1000,
    headers: {'X-Requested-With': 'XMLHttpRequest'},
});
