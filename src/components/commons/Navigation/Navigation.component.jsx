import { NAVIGATION_DEMO } from '../../../data/navigation';
import NavigationItem from './NavigationItem.component';
import React from 'react';

const Navigation = ({ navigations = NAVIGATION_DEMO }) => (
  <ul className='nc-Navigation hidden lg:flex lg:flex-wrap lg:items-center lg:space-x-1 relative'>
    {navigations.map((item) => (
      <NavigationItem key={item.id} menuItem={item} />
    ))}
  </ul>
);

export default Navigation;
