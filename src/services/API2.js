const API_ENV = process.env.REACT_APP_SECRET_API;
const envUrl = require('../../package.json').envUrl;
const baseURL = envUrl[API_ENV].API_URL;
const baseURL2 = envUrl[API_ENV].API_URL2;

import axios from '../utils/http';

axios.get(`${baseURL}/123`)

axios.get(`${baseURL2}/456`)
