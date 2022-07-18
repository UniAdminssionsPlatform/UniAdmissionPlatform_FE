import MDEditor from '@uiw/react-md-editor';
import React from 'react';
const MarkdownViewComponent = (props) => {
  const { str } = props;
  return (
    <div className='container' data-color-mode='light'>
      <MDEditor.Markdown source={str} />
    </div>
  );
};
export default MarkdownViewComponent;
