import React from 'react';

const Textarea = ({ className, children, ...args }, ref) => (
  <textarea
    ref={ref}
    className={`block w-full text-sm rounded-xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 ${className}`}
    rows={4}
    {...args}>
    {children}
  </textarea>
);

export default Textarea;
