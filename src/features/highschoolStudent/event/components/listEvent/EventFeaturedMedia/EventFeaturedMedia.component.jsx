import NcImage from '../../../../../../components/commons/NcImage/NcImage.component';
import React, { useRef } from 'react';

const EventFeaturedMedia = ({ className = ' w-full h-full ', post }) => {
  const { thumbnailUrl } = post;

  const videoRef = useRef(null);

  return (
    <div className={`nc-PostFeaturedMedia relative ${className}`} data-nc-id='PostFeaturedMedia' ref={videoRef}>
      <NcImage containerClassName='absolute inset-0' src={thumbnailUrl} alt='Hình ảnh' />
    </div>
  );
};

export default EventFeaturedMedia;
