import axios from 'axios';

import config from '../constant/config';

axios.defaults.headers.post['Content-Type'] = 'application/json';

const authAxios = axios.create({
  baseURL: config.baseURL,
});

export default authAxios;
