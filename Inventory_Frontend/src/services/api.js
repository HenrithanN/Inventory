import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:62790/'});

export default api;