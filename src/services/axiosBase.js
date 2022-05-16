import { TOKEN_KEY } from '../constants/AppConst';
import Cookies from 'js-cookie';
import axios from 'axios';

export const CallAPI = (
  endpoint,
  method = 'GET',
  body = {},
  params = {},
  configHeaders = null,
  responseType = null
) => {
  let token = null;
  token = Cookies.get(TOKEN_KEY);
  const headers = configHeaders
    ? configHeaders
    : {
        'content-type': 'application/json',
        'x-token': token && token !== 'undefined' ? token : null
      };
  return axios({
    method,
    url: process.env.REACT_APP_API_URL + endpoint,
    headers,
    data: body,
    responseType,
    params
  });
};
