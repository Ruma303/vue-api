import axios from 'https://cdn.skypack.dev/axios';
export const HTTP = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
        'Content-Type': 'application/json',
    },
});