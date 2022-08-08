/* eslint-disable */
import React, { useEffect } from 'react';
import NextPrev from '../NextPrev/NextPrev.component';
import Glide from '@glidejs/glide';
import Card9 from '../Card/Card9/Card9';
import Heading from '../Heading/Heading.component';
const SectionSliderPostsComponent = (props) => {
  const { posts } = props;
  console.log(posts);
  const UNIQUE_CLASS = 'SectionSliderPosts_';
  const perView = 4;
  const MY_GLIDE = new Glide(`.${UNIQUE_CLASS}`, {
    // @ts-ignore
    direction: document.querySelector('html')?.getAttribute('dir') === 'rtl' ? 'rtl' : 'ltr',
    perView: perView,
    gap: 32,
    bound: true,
    breakpoints: {
      1280: {
        perView: perView - 1
      },
      1023: {
        perView: perView - 2 || 1.2,
        gap: 20
      },
      767: {
        perView: perView - 2 || 1.2,
        gap: 20
      },
      639: {
        perView: 1.2,
        gap: 20
      }
    }
  });
  useEffect(() => {
    if (!MY_GLIDE) return;
    MY_GLIDE.mount();
  }, [MY_GLIDE]);
  const renderHeading = () => {
    return (
      <Heading desc={'Nội dung bài viết'} hasNextPrev>
        {'Các bài viết mới nhất'}
      </Heading>
    );
  };
  return (
    <div className={`nc-SectionSliderPosts `}>
      <div className={`${UNIQUE_CLASS}`}>
        {renderHeading()}
        <div className='glide__track' data-glide-el='track'>
          <ul className='glide__slides'>
            {posts.list.map((item, index) => (
              <li key={index} className={`glide__slide h-auto pb-12 xl:pb-16`}>
                <Card9 post={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SectionSliderPostsComponent;
