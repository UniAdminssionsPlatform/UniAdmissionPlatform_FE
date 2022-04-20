import NavigationItem from './NavigationItem.component';
import React from 'react';
import { NavigationSystem } from '../../../router/navigation/NavigationSystem';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const { user } = useSelector((state) => state.authentication);
  return (
    <ul className='nc-Navigation hidden lg:flex lg:flex-wrap lg:items-center lg:space-x-1 relative'>
      {NavigationSystem(user?.role).map((item) => (
        <NavigationItem key={item.id} menuItem={item} />
      ))}
    </ul>
  );
};

export default Navigation;
