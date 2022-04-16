import { _getAvatarRd } from '../../../constants/fakeData';
import { avatarColors } from '../../../constants/contants';
import React from 'react';

const Avatar = ({
  containerClassName = 'ring-1 ring-white dark:ring-neutral-900',
  sizeClass = 'h-6 w-6 text-sm',
  radius = 'rounded-md',
  imgUrl = _getAvatarRd(),
  userName
}) => {
  const url = imgUrl || '';
  const name = userName || 'John Doe';
  const _setBgColor = (name) => {
    const backgroundIndex = Math.floor(name.charCodeAt(0) % avatarColors.length);
    return avatarColors[backgroundIndex];
  };

  return (
    <div
      className={`wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner ${radius} ${sizeClass} ${containerClassName}`}
      style={{ backgroundColor: url ? undefined : _setBgColor(name) }}>
      {url && <img className='absolute inset-0 w-full h-full object-cover' src={url} alt={name} />}
      <span className='wil-avatar__name'>{name[0]}</span>
    </div>
  );
};

export default Avatar;
