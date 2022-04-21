import { Helmet } from 'react-helmet';
import { Typography, Tag } from 'antd';
import LayoutPage from '../../commons/LayoutPage/LayoutPage.component';
import React, { useState } from 'react';
import RegisterForm from '../../form/RegisterForm/RegisterForm.component';
import university from '../../../images/university.svg';
import highschool from '../../../images/highschool.svg';
import student from '../../../images/student.svg';
const loginSocials = [
  {
    name: 'Tài khoản quản lý đại học',
    href: '#',
    icon: university
  },
  {
    name: 'Tài khoản quản lý trường cấp 3 ',
    href: '#',
    icon: highschool
  },
  {
    name: 'Tài khoản học sinh',
    href: '#',
    icon: student
  }
];
const RegisterComponent = (props) => {
  const { Text, Link } = Typography;
  const { onSubmit, loginWithGoogle, className } = props;
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div className={`nc-PageLogin ${className}`} data-nc-id='PageLogin'>
      <Helmet>
        <title>Xác thực || Blog Magazine React Template</title>
      </Helmet>
      <LayoutPage subHeading='Chào mừng đến với UniAdmissionPlatform' headingEmoji='🔑' heading='Xác thực tài khoản'>
        {isSelected === false ? (
          <div className='max-w-md mx-auto space-y-6'>
            <div className='grid gap-3'>
              <Text type='warning' style={{ textAlign: 'center' }} italic>
                Hãy xác thực tài khoản của bạn
              </Text>
              {loginSocials.map((item, index) => (
                <div onClick={() => setIsSelected(true)}>
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
            <Tag color='orange' onClick={() => setIsSelected(false)}>
              hoàn tác
            </Tag>
            <RegisterForm />
          </div>
        )}
      </LayoutPage>
    </div>
  );
};
export default RegisterComponent;
