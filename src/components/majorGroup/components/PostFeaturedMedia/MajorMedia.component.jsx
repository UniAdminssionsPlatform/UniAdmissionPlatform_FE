import React, { useRef } from 'react';
import NcImage from '../../../commons/NcImage/NcImage.component';

const MajorMedia = ({ className = ' w-full h-full ', post }) => {
  const { featuredImage } = post;

  const videoRef = useRef(null);

  return (
    <div className={`nc-PostFeaturedMedia relative ${className}`} data-nc-id='PostFeaturedMedia' ref={videoRef}>
      <NcImage
        containerClassName='absolute inset-0'
        src='https://thietbiketnoi.com/wp-content/uploads/2020/01/tong-hop-hinh-nen-background-vector-designer-dep-do-phan-giai-fhd-2k-4k-moi-nhat-24-1024x678.jpg'
      />
    </div>
  );
};

export default MajorMedia;
