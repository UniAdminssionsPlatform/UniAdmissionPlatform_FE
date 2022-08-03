import GallerySlider from './GallerySlider.component';
import NcImage from '../NcImage/NcImage.component';
import React, { useRef } from 'react';
const PostFeaturedMedia = ({ className = ' w-full h-full ', event, isHover = false }) => {
  const { thumbnailUrl, id } = event;
  const videoRef = useRef(null);
  let IS_MOBILE = false;
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) IS_MOBILE = true;
  const renderGallerySlider = () => {
    if (!thumbnailUrl) return null;
    return <GallerySlider thumbnailUrl={thumbnailUrl} id={id} uniqueClass={`PostFeaturedGallery_${id}`} />;
  };

  const renderContent = () => {
    return renderGallerySlider();
  };
  return (
    <div className={`nc-PostFeaturedMedia relative ${className}`} data-nc-id='PostFeaturedMedia' ref={videoRef}>
      <NcImage containerClassName='absolute inset-0' src={thumbnailUrl} />
      {renderContent()}
    </div>
  );
};

export default PostFeaturedMedia;
