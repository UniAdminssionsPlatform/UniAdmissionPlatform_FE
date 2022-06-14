import { HeartOutlined } from '@ant-design/icons';
import CreateEventComponent from './components/CreateNew.compomnent';
import LayoutPageWithout from '../../../components/commons/LayoutPage/LayoutPageWithout.component';
import React from 'react';

const CreateNewContainer = () => {
  const SINGLE = {
    id: 'eae0212192f63287e0c212',
    featuredImage:
      'https://images.unsplash.com/photo-1605487903301-a1dff2e6bbbe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1957&q=80',
    title: 'Quiet ingenuity: 120,000 lunches and counting',
    desc: 'We’re an online magazine dedicated to covering the best in international product design. We started as a little blog back in 2002 covering student work and over time',
    date: 'May 20, 2021',
    href: '/single/this-is-single-slug',
    commentCount: 14,
    viewdCount: 2378,
    readingTime: 6,
    bookmark: { count: 3502, isBookmarked: false },
    like: { count: 773, isLiked: true },
    author: {
      id: 10,
      firstName: 'Mimi',
      lastName: 'Fones',
      displayName: 'Fones Mimi',
      email: 'mfones9@canalblog.com',
      avatar: '10',
      count: 38,
      href: '/author/the-demo-author-slug',
      desc: 'There’s no stopping the tech giant. Apple now opens its 100th store in China.There’s no stopping the tech giant.',
      jobName: 'Author Job'
    }
  };
  return (
    <LayoutPageWithout>
      <div className='flex flex-col space-y-8 xl:space-y-0 xl:flex-row'>
        <CreateEventComponent data={SINGLE} />
      </div>
    </LayoutPageWithout>
  );
};

export default CreateNewContainer;
