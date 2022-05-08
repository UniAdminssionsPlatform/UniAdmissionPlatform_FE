import Cookies from 'js-cookie';
import { authenticationActions } from './authentication-slice';
import { TOKEN_KEY, USER_STORAGE } from '../../constants/AppConst';

export const SigninHandler = (data) => (dispatch) => {
  Cookies.set(TOKEN_KEY, data.token);
  localStorage.setItem(USER_STORAGE, JSON.stringify(data));
  if (data?.roles != '') {
    dispatch(authenticationActions.fetchingLoginSuccess(data));
  }
};

export const logoutHandler = () => (dispatch) => {
  Cookies.remove(TOKEN_KEY);
  localStorage.removeItem(USER_STORAGE);
  dispatch(authenticationActions.logout());
};
