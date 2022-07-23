import { Button, Form, Input, Skeleton } from 'antd';
import { SINGLE } from '../../data/single';
import { commentValidate } from '../../validate/Comment.validate';
import ButtonPrimary from '../field/ButtonPrimary/ButtonPrimary.component';
import React from 'react';
import SingleCommentLists from '../commons/SingleCommentLists/SingleCommentLists.component';

const CommentComponent = (props) => {
  const [form] = Form.useForm();
  const { listComment, isCommentLoading, handleComment, initValue } = props;
  return (
    <div className='nc-SingleContent space-y-10'>
      <div id='comment' className='max-w-screen-md mx-auto pt-5'>
        <h3 className='text-xl font-semibold text-neutral-800 dark:text-neutral-200'>
          Phản hồi ({SINGLE.commentCount})
        </h3>
        <Form form={form} layout='vertical' onFinish={handleComment} autoComplete='off' fields={initValue}>
          <Form.Item name='content' rules={commentValidate} placeholder={'Nhập nội dung comment'}>
            <Input.TextArea allowClear showCount />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit' shape='round' size={'large'}>
              Bình luận
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className='max-w-screen-md mx-auto'>
        {isCommentLoading ? <Skeleton active /> : <SingleCommentLists comments={listComment} />}
        <Button type='primary' htmlType='submit' shape='round' size={'large'} className='dark:bg-primary-700 w-full'>
          Hiển thị tất cả bình luận (+10 bình luận)
        </Button>
      </div>
    </div>
  );
};
export default CommentComponent;
