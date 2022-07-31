import React from 'react';
import NextPrev from '../NextPrev/NextPrev.component';
const SectionSliderPostsComponent = (props) => {
  const {} = props;
  return (
    <div className={`nc-SectionSliderPosts`}>
      <div>
        <div className='glide__track' data-glide-el='track'>
          <ul className='glide__slides'>
            {/*{posts.map((item, index) => (*/}
            {/*  <li key={index} className={`glide__slide h-auto pb-12 xl:pb-16`}>*/}
            {/*    <Card7 post={item} />*/}
            {/*  </li>*/}
            {/*))}*/}
          </ul>
        </div>
        <NextPrev btnClassName='w-12 h-12' containerClassName='justify-center' />}
      </div>
    </div>
  );
};
export default SectionSliderPostsComponent;
