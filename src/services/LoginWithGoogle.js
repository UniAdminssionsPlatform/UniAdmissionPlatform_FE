import { PATH_AUTH_LOGIN_ENDPOINT } from '../constants/Endpoints/AuthenticationEnpoint';

export async function getToken(fbToken) {
  return await post(PATH_AUTH_LOGIN_ENDPOINT, { token: fbToken });
}
