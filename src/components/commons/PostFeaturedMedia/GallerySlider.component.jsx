import NcImage from '../NcImage/NcImage.component';
import NextPrev from '../NextPrev/NextPrev.component';
import React from 'react';
import ncNanoId from '../../../utils/ncNanoId';

const GallerySlider = ({ thumbnailUrl, uniqueClass, id }) => {
  const UNIQUE_CLASS = `gallerySlider_${ncNanoId(uniqueClass)}`;
  return (
    <div className={`${UNIQUE_CLASS} group relative z-10 w-full h-full`}>
      <div className='glide__track h-full' data-glide-el='track'>
        <ul className='glide__slides h-full'>
          <li className='glide__slide h-full' key={id}>
            <NcImage src={thumbnailUrl} containerClassName='w-full h-full' />
          </li>
          )}
        </ul>
      </div>
      <div className='absolute w-full left-0 bottom-0 h-8 bg-gradient-to-t from-neutral-700'></div>
      <div
        className='absolute z-10 bottom-3 left-0 w-full flex items-center justify-center glide__bullets'
        data-glide-el='controls[nav]'></div>
    </div>
  );
};

export default GallerySlider;
