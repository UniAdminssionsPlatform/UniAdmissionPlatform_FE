import { Button, Tag, Typography } from 'antd';
import LayoutPage from '../../../../components/commons/LayoutPage/LayoutPage.component';
import React, { useState } from 'react';
import RegisterFormContainer from '../RegisterForm.container';
import highschool from '../../../../images/highschool.svg';
import student from '../../../../images/student.svg';
import university from '../../../../images/university.svg';
const loginSocials = [
  {
    name: 'Tài khoản quản lý đại học',
    href: '#',
    icon: university,
    role: 'uni'
  },
  {
    name: 'Tài khoản quản lý trường cấp 3 ',
    href: '#',
    icon: highschool,
    role: 'hs'
  },
  {
    name: 'Tài khoản học sinh',
    href: '#',
    icon: student,
    role: 'st'
  }
];
const RegisterComponent = (props) => {
  const [role, setRole] = useState();
  const { Text } = Typography;
  const { className } = props;
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div className={`nc-PageLogin ${className}`} data-nc-id='PageLogin'>
      <LayoutPage subHeading='Chào mừng đến với UniAdmissionPlatform' headingEmoji='🔑' heading='Xác thực tài khoản'>
        {isSelected === false ? (
          <div className='max-w-md mx-auto space-y-6'>
            <div className='grid gap-3'>
              <Text type='warning' style={{ textAlign: 'center' }} italic>
                Hãy xác thực tài khoản của bạn
              </Text>
              {loginSocials.map((item, index) => (
                <div
                  onClick={() => {
                    setIsSelected(true);
                    setRole(item.role);
                  }}>
                  <a
                    key={index}
                    href={item.href}
                    className='nc-will-change-transform flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]'>
                    <img className='flex-shrink-0' width={25} height={25} src={item.icon} alt={item.name} />
                    <h3 className='flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm'>
                      {item.name}
                    </h3>
                  </a>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div>
              <Button onClick={() => setIsSelected(false)} type='primary' danger shape={'round'}>
                Hoàn Tác
              </Button>
            </div>
            <RegisterFormContainer role={role} setIsSelected={setIsSelected} />
          </div>
        )}
      </LayoutPage>
    </div>
  );
};
export default RegisterComponent;
