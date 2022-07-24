import { Button, Form, Input, Skeleton, Typography } from 'antd';
import { PATH } from '../../constants/Paths/Path';
import { commentValidate } from '../../validate/Comment.validate';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';
import SingleCommentLists from '../commons/SingleCommentLists/SingleCommentLists.component';

const CommentComponent = (props) => {
  const [form] = Form.useForm();
  const { Text } = Typography;
  const history = useHistory();
  const { isAuthUser } = useSelector((state) => state.authentication);
  const { listComment, isCommentLoading, handleComment, initValue, handleShowAllMessage } = props;
  return (
    <div className='nc-SingleContent space-y-10'>
      <div id='comment' className='max-w-screen-md mx-auto pt-5'>
        <h3 className='text-xl font-semibold text-neutral-800 dark:text-neutral-200'>
          Phản hồi ({listComment?.total})
        </h3>
        <Form form={form} layout='vertical' onFinish={handleComment} autoComplete='off' fields={initValue}>
          {!isAuthUser ? (
            <Text style={{ color: '#1890ff' }}> Bạn cần đăng nhập vào website để sử dụng chức năng này!</Text>
          ) : null}
          <Form.Item name='content' rules={commentValidate} placeholder={'Nhập nội dung comment'}>
            <Input.TextArea allowClear showCount disabled={!isAuthUser} />
          </Form.Item>
          <Form.Item>
            {isAuthUser ? (
              <Button type='primary' htmlType='submit' shape='round' size={'large'}>
                Bình luận
              </Button>
            ) : (
              <>
                <Button type='primary' shape='round' size={'large'} onClick={() => history.push(PATH.LOGIN)}>
                  Đăng nhập ngay
                </Button>
              </>
            )}
          </Form.Item>
        </Form>
      </div>
      <div className='max-w-screen-md mx-auto'>
        {isCommentLoading ? <Skeleton active /> : <SingleCommentLists comments={listComment} />}
        {listComment?.limit < listComment?.total ? (
          <Button
            type='primary'
            htmlType='submit'
            shape='round'
            size={'large'}
            className='dark:bg-primary-700 w-full'
            onClick={() => handleShowAllMessage()}>
            Hiển thị tất cả bình luận (+{listComment?.total - listComment?.limit} bình luận)
          </Button>
        ) : null}
      </div>
    </div>
  );
};
export default CommentComponent;
