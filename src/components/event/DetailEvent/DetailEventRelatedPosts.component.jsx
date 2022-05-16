import { DEMO_POSTS } from '../../../data/posts';
import Card11 from '../../commons/Card/Card11/Card11.component';
import Card9 from '../../commons/Card/Card9/Card9';
import Heading from '../../commons/Heading/Heading.component';
import React from 'react';

// DEMO DATA
const demoRelated = DEMO_POSTS.filter((_, i) => i >= 10 && i < 14);
const demoMoreFromAuthor = DEMO_POSTS.filter((_, i) => i >= 14 && i < 18);

const SingleRelatedPosts = ({ relatedPosts = demoRelated, moreFromAuthorPosts = demoMoreFromAuthor }) => (
  <div className='relative bg-neutral-100 dark:bg-neutral-800 py-16 lg:py-28 mt-16 lg:mt-28'>
    {/* RELATED  */}
    <div className='container'>
      <div>
        <Heading className='mb-10 text-neutral-900 dark:text-neutral-50' desc=''>
          Related posts
        </Heading>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8'>
          {relatedPosts.map((post) => (
            <Card11 key={post.id} post={post} />
          ))}
        </div>
      </div>

      {/* MORE FROM AUTHOR */}
      <div className='mt-20'>
        <Heading className='mb-10 text-neutral-900 dark:text-neutral-50' desc=''>
          More from author
        </Heading>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8'>
          {moreFromAuthorPosts.map((post) => (
            <Card9 key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SingleRelatedPosts;
