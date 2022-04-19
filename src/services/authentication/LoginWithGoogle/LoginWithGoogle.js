import { PATH_AUTH_LOGIN } from '../../../constants/Endpoints/AuthenticationEnpoint';

export async function getToken(fbToken) {
  return await post(PATH_AUTH_LOGIN, { token: fbToken });
}
