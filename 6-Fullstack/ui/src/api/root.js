import axios from "axios";

const apiRoot = axios.create({
    baseURL: 'http://localhost:8080/api/',
    headers: { 'X-Custom-Header': 'foobar' }
});

export default apiRoot;