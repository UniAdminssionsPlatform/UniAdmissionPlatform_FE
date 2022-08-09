import React from 'react';
import rightImg from '../../../../images/BecomeAnAuthorImg.png';
import ShowImageComponent from '../../../../commons/ShowImage.component';
import { Button, Space } from 'antd';
import { useHistory } from 'react-router-dom';
import { PATH } from '../../../../constants/Paths/Path';
import { useSelector } from 'react-redux';
const WelcomeComponent = () => {
  const { isAuthUser } = useSelector((state) => state.authentication);
  const history = useHistory();
  return (
    <div
      className={`nc-SectionBecomeAnAuthor relative flex flex-col lg:flex-row items-center`}
      data-nc-id='SectionBecomeAnAuthor'>
      <div className='flex-shrink-0 mb-14 lg:mb-0 lg:mr-10 lg:w-2/5'>
        <Space direction={'vertical'}>
          <div>
            <span className='text-xs uppercase tracking-wider font-medium text-neutral-400'>
              NỀN TẢNG KẾT NỐI TUYỂN SINH
            </span>
            <h2 className='font-semibold text-3xl sm:text-4xl mt-3'>Đồng hành cùng bạn trên những môi trường ước mơ</h2>
            <span className='block mt-8 text-neutral-500 dark:text-neutral-400'>
              Kết nối tuyển sinh Việt Nam là nơi giao lưu chia sẻ những quan tâm về tuyển sinh thi cử, hướng nghiệp chọn
              trường, cũng như những trải nghiệm về dạy và học của cộng đồng.
            </span>
          </div>
          {isAuthUser ? null : (
            <Button type='primary' shape={'round'} size={'large'} onClick={() => history.push(PATH.LOGIN)}>
              Đăng nhập ngay
            </Button>
          )}
        </Space>
      </div>
      <div className='flex-grow'>
        <ShowImageComponent src={rightImg} />
      </div>
    </div>
  );
};
export default WelcomeComponent;
