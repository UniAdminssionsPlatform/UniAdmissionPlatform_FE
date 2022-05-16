import React from 'react';

const Label = ({ className, children }) => (
  <span
    className={`nc-Label ${className} text-neutral-800 font-medium text-sm dark:text-neutral-300`}
    data-nc-id='Label'>
    {children}
  </span>
);

export default Label;
