import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
//Execute code and request Grobally
//Setting URL grobally
//In case that we don't use only one global URL=> Check axios.js file
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.interceptors.request.use(request => {
    console.log(request);
    return request; 
}, error => {
        console.log(error);
        return PromiseRejectionEvent.reject(error);
    });

axios.interceptors.response.use(response => {
        console.log(response);
        return response; 
    }, error => {
            console.log(error);
            return Promise.reject(error);
        });

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
