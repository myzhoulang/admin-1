const API_ENV = process.env.REACT_APP_SECRET_API;
const envUrl = require('../../package.json').envUrl;
const baseURL = envUrl[API_ENV].API_URL;

import axios from '../utils/http';

axios.get(`${baseURL}/123`)
