import axios from 'axios';
//Suppose that baseURL in instance is a different URL
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCES';
export default instance; 
