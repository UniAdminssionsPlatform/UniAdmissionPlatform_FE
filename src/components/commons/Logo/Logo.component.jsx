import { Link } from 'react-router-dom';
import React from 'react';
import logo from './logoMiku.png';
const Logo = () => (
  <Link to='/' className='ttnc-logo inline-block text-primary-6000'>
    <img src={logo} alt='fireSpot' className='h-20 w-50' />
  </Link>
);

export default Logo;
