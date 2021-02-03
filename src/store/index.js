import {createStore} from "vuex";

import {req} from '../services/api'

req.interceptors.response.use(response => {
    return response.data.status == 'success' ? Promise.resolve(response) : Promise.reject(response)
})

// import products from "./modules/bookcase/products";

// VUEX 4 não mapeia modules corretamente, e devido ao vite, não foi possivel utilizar vuex 3.

const BASE_URL = ''

export default createStore({
    modules: {
        // 'book_case': products
    },
    state: {
        books: []
    },
    mutations: {
        add_products(state, params) {
            state.books = params
        }
    },
    getters: {
        getListBooks(state) {
            return state.books
        }
    },
    actions: {
        deleteBook(context, params) {
            return req.delete(`/books/${params.id}`).then(response => {
                return Promise.resolve(response)
            }).catch(error => {
                return Promise.reject(error)
            })
        },
        fetchBooks({commit}, params) {
            return req.get('/books', {params: params}).then((response) => {
                commit('add_products', response)
                return Promise.resolve(response)
            }).catch(error => {
                console.log(error, 'error')
                return Promise.reject(error)
            })
        },
        createBook({commit}, params) {

            return req.post('/books/create', params).then((response) => {
                return Promise.resolve(response)
            }).catch(error => {
                return Promise.reject(error)
            })
        },
        updateBook({commit}, params) {

            return req.post('/books/update', params).then((response) => {
                return Promise.resolve(response)
            }).catch(error => {
                return Promise.reject(error)
            })
        },
    },
});
