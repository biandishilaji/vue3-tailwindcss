import axios from 'axios'

let qs = require('qs')

const baseURL = process.env.API_URL

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.baseURL = baseURL

axios.defaults.paramsSerializer = params => {
    return qs.stringify(params, {arrayFormat: 'brackets'});
};

// Response interceptor
axios.interceptors.response.use(
    response => {
        return response.data.success ? Promise.resolve(response.data) : Promise.reject(response.data)
    },
    error => {

        switch (error.response.status) {

        }

        return Promise.reject(error)

    });
