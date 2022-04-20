import { Button, Checkbox, Form, Input } from 'antd';
import { Helmet } from 'react-helmet';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { password, username } from '../../../validate/Login.validate';
import LayoutPage from '../../commons/LayoutPage/LayoutPage.component';
import React from 'react';
import facebookSvg from '../../../images/Facebook.svg';
import googleSvg from '../../../images/Google.svg';

const loginSocials = [
  {
    name: 'Continue with Facebook',
    href: '#',
    icon: facebookSvg
  },
  {
    name: 'Continue with Google',
    href: '#',
    icon: googleSvg
  }
];
const RegisterComponent = (props) => {
  const { onSubmit, loginWithGoogle, className } = props;
  return (
    <div className={`nc-PageLogin ${className}`} data-nc-id='PageLogin'>
      <Helmet>
        <title>Registration || Blog Magazine React Template</title>
      </Helmet>
      <LayoutPage subHeading='Welcome to UniAdmissionPlatform' headingEmoji='🔑' heading='Registration'>
        <div className='max-w-md mx-auto space-y-6'>
          <div className='grid gap-3'>
            {loginSocials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className='nc-will-change-transform flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]'>
                <img className='flex-shrink-0' src={item.icon} alt={item.name} />
                <h3 className='flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm'>
                  {item.name}
                </h3>
              </a>
            ))}
          </div>
          {/* OR */}
          <div className='relative text-center'>
            <span className='relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900'>
              OR
            </span>
          </div>
          <Form
            name='normal_login'
            className='grid grid-cols-1'
            initialValues={{
              remember: true
            }}
            onFinish={onSubmit}>
            <Form.Item name='email' rules={username}>
              <label className='block'>
                <span className='text-neutral-800 dark:text-neutral-200'>Email address</span>
                <Input
                  prefix={<UserOutlined className='site-form-item-icon' />}
                  placeholder='email'
                  className='text-neutral-800 dark:text-neutral-200'
                />
              </label>
            </Form.Item>
            <span className='flex justify-between items-center text-neutral-800 dark:text-neutral-200'>Password</span>
            <Form.Item name='password' rules={password}>
              <label className='block'>
                <Input
                  prefix={<LockOutlined className='site-form-item-icon' />}
                  type='password'
                  placeholder='Password'
                  className='mt-1'
                />
              </label>
            </Form.Item>

            <Form.Item>
              <Form.Item name='remember' valuePropName='checked' noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className='login-form-forgot' href='/'>
                Forgot password
              </a>
            </Form.Item>
            <span className='block text-center text-neutral-700 dark:text-neutral-300'>
              <Form.Item>
                <Button type='danger' htmlType='submit' className='login-form-button w-3/6'>
                  Log in
                </Button>
              </Form.Item>
            </span>
          </Form>
        </div>
      </LayoutPage>
    </div>
  );
};
export default RegisterComponent;
