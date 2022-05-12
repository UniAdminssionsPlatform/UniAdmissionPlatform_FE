import { Link } from 'react-router-dom';
import React from 'react';

const WidgetHeading1 = ({ className, title, viewAll }) => (
  <div
    className={`nc-WidgetHeading1 flex items-center justify-between p-4 xl:p-5 border-b border-neutral-200 dark:border-neutral-700 ${className}`}
    data-nc-id='WidgetHeading1'>
    <h2 className='text-lg text-neutral-900 dark:text-neutral-100 font-semibold flex-grow'>{title}</h2>
    {!!viewAll.href && (
      <Link
        className='flex-shrink-0 block text-primary-700 dark:text-primary-500 font-semibold text-sm'
        target={viewAll.targetBlank ? '_blank' : undefined}
        rel='noopener noreferrer'
        to={viewAll.href}>
        {viewAll.label}
      </Link>
    )}
  </div>
);

export default WidgetHeading1;
