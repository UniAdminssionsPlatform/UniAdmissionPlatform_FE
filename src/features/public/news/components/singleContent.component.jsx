import { Typography } from 'antd';
import MarkdownViewComponent from '../../../../components/MarkdownView/MarkdownView.component';
import React from 'react';

const SingleContent = (props) => {
  const { Text, Title } = Typography;
  const { newDetail } = props;
  return (
    <div className='nc-SingleContent space-y-10'>
      <Title level={3}>{newDetail.shortDescription}</Title>
      <div
        id='single-entry-content'
        className='prose prose-sm !max-w-screen-md sm:prose lg:prose-lg mx-auto dark:prose-invert'>
        <MarkdownViewComponent str={newDetail.description} />
      </div>
    </div>
  );
};

export default SingleContent;
