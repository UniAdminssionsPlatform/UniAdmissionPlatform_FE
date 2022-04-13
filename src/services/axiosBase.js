import axios from 'axios'
import * as cookie from 'js-cookie'
import {TOKEN_KEY} from '../constants/AppConst'

export const CallAPI = (
    endpoint,
    method = 'GET',
    body = {},
    params = {},
    configHeaders = null,
    responseType = null
) => {
    let token = null
    var headers = configHeaders
        ? configHeaders
        : {
            'content-type': 'application/json'
        }
    token = cookie.get(TOKEN_KEY)
    if (token && token !== 'undefined') {
        headers.Authorization = `Bearer ${token}`
    }

    return axios({
        method: method,
        url: process.env.REACT_APP_API_URL + endpoint,
        headers: headers,
        data: body,
        responseType: responseType,
        params: params
    })
}
