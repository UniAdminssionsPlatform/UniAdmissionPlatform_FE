import { XIcon } from '@heroicons/react/solid';
import React from 'react';
import twFocusClass from '../../../utils/twFocusClass';

const ButtonClose = ({ className = '', onClick = () => {}, iconSize = 'w-5 h-5' }) => (
  <button
    className={`w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 ${className} ${twFocusClass()}`}
    onClick={onClick}>
    <span className='sr-only'>Close</span>
    <XIcon className={iconSize} />
  </button>
);

export default ButtonClose;
