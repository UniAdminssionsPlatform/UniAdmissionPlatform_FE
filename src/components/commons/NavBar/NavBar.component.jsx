import ButtonPrimary from '../../field/Button/Button.component';
import React from 'react';
// import DarkModeContainer from "containers/DarkModeContainer/DarkModeContainer";
import { PATH } from '../../../constants/Paths/Path';
import { Tag, Typography } from 'antd';
import { auth } from '../../../firebase/firebaseConfig';
import { handleNotification } from '../../../notification/SignOutNotification';
import { logoutHandler } from '../../../redux-flow/authentication/authentication-action';
import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Logo from '../Logo/Logo.component';
import MenuBar from '../MenuBar/MenuBar.component';
import Navigation from '../Navigation/Navigation.component';
import SearchDropdown from '../Navigation/SearchDropdown.component';

const MainNav = ({ isTop }) => {
  const { Text } = Typography;
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, isAuthUser } = useSelector((state) => state.authentication);
  const handleSighOut = () => {
    signOut(auth)
      .then(() => {
        handleNotification();
        dispatch(logoutHandler());
        history.push(PATH.INDEX);
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className={`nc-MainNav nc-MainNav1 relative z-10 ${isTop ? 'onTop ' : 'notOnTop backdrop-filter'}`}>
      <div className='container py-5 relative flex justify-between items-center space-x-4 xl:space-x-8'>
        <div className='flex justify-start flex-grow items-center space-x-4 sm:space-x-10 2xl:space-x-14'>
          <Logo />
          <Navigation />
        </div>
        <div className='flex-shrink-0 flex items-center justify-end text-neutral-700 dark:text-neutral-100 space-x-1'>
          <div className='hidden items-center xl:flex space-x-1'>
            {/*<DarkModeContainer/>*/}
            <SearchDropdown />
            <div className='px-1' />
            {isAuthUser ? (
              <div>
                Xin ch??o.{' '}
                <Text type='success' strong>
                  {user.user_id}{' '}
                  <Tag color='geekblue' onClick={() => handleSighOut()}>
                    ????ng xu???t
                  </Tag>
                </Text>
              </div>
            ) : (
              <ButtonPrimary href={PATH.LOGIN}>????ng nh???p</ButtonPrimary>
            )}
          </div>
          <div className='flex items-center xl:hidden'>
            {isAuthUser ? (
              <div>
                Xin ch??o.{' '}
                <Text type='success' strong>
                  {user.user_id}{' '}
                  <Tag color='geekblue' onClick={() => handleSighOut()}>
                    ????ng xu???t
                  </Tag>
                </Text>
              </div>
            ) : (
              <ButtonPrimary href={PATH.LOGIN}>????ng nh???p</ButtonPrimary>
            )}
            <div className='px-1' />
            <MenuBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
