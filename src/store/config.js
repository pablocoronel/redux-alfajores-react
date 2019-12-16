import axios from 'axios';

export const API_baseURL = 'http://127.0.0.1:8000/';
export const router_baseURL = '';

const API = axios.create({
	baseURL: API_baseURL
});

export default API;
