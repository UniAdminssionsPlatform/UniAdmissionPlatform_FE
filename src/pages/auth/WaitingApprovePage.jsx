import { Button, Result } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { PATH } from '../../constants/Paths/Path';
import { useHistory } from 'react-router-dom';
import React from 'react';
import { Helmet } from 'react-helmet';

const WaitingApprovePage = () => {
  const history = useHistory();
  return (
    <>
      <Helmet>
        <title>Trang đợi xét duyệt tài khoản</title>
      </Helmet>
      <Result
        title='Tài khoản đang đợi xét duyệt !'
        subTitle='Tài khoản của bạn đã đăng ký thành công và đang đợi xét duyệt để tham gia hệ thống'
        extra={[
          <div className='flex justify-center'>
            <div className='grid grid-cols-1 gap-4'>
              <LoadingOutlined
                style={{
                  fontSize: 24
                }}
                spin
              />
              <Button
                onClick={() => {
                  history.push(PATH.INDEX);
                }}>
                Quay lại trang chủ
              </Button>
            </div>
          </div>
        ]}
      />
    </>
  );
};
export default WaitingApprovePage;
