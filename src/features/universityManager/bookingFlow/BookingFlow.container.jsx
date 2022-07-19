import { Button, Divider, Space, Steps, Typography, notification } from 'antd';
import {
  CancelSelectedHighSchool,
  setSelectedHighSchool
} from '../../../redux-flow/selectedHighSchool/selectedHighSchool-action';
import { LoadingOutlined } from '@ant-design/icons';
import { PATH_UNIVERSITY_MANAGER } from '../../../constants/Paths/Path';
import { bookASlotInAdminUniversity } from '../../../services/AdminUniversitySlotServices';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ConfirmBookingComponent from './confirmBooking/ConfirmBooking.component';
import HighSchoolInforComponent from './components/HighSchoolInfor.component';
import Layout from '../../../components/Layout';
import LayoutPageWithout from '../../../components/commons/LayoutPage/LayoutPageWithout.component';
import React, { useEffect, useState } from 'react';
import SelectEventContainer from './selectEvent/SelectEvent.container';
import SelectSlotContainer from './selectSlot/SelectSlot.container';

const BookingFlowContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { Title, Text } = Typography;
  const { Step } = Steps;
  const { highSchool } = useSelector((state) => state.selectedHighSchool);
  if (highSchool === null || highSchool === undefined) history.push(PATH_UNIVERSITY_MANAGER.REGIS_EVENT);
  const [currentStep, setCurrentStep] = useState(1);
  const [currenSlotSelected, setCurrentSlotSelected] = useState();
  const [currentEventSelected, setCurrentEventSelected] = useState();
  const onChangeStatus = (status) => {
    if (status < currentStep) setCurrentStep(status);
    if (status === 0) {
      dispatch(CancelSelectedHighSchool());
      history.push(PATH_UNIVERSITY_MANAGER.REGIS_EVENT);
    }
  };
  useEffect(() => {
    if (currentStep === 1 && currenSlotSelected !== undefined) setCurrentStep(2);
  }, [currenSlotSelected]);
  useEffect(() => {
    if (currentStep === 2 && currentEventSelected !== undefined) setCurrentStep(3);
  }, [currentEventSelected]);
  const handleSubmit = () => {
    const bookingObject = {
      eventId: currentEventSelected?.id,
      slotId: currenSlotSelected?.id
    };
    bookASlotInAdminUniversity(bookingObject)
      .then((res) => {
        notification.success({
          message: res,
          description: `Đăng ký thành công!`
        });
        setCurrentStep(4);
      })
      .catch((err) => {
        notification.error({
          message: err,
          description: `Đăng ký thất bại !`
        });
      });
  };
  const handleFinish = () => {
    history.push();
  };
  return (
    <Layout>
      <div className='flex flex-col space-y-8 xl:space-y-0 xl:flex-row'>
        <div className='flex-shrink-0 max-w-xl xl:w-80 xl:pr-8'>
          <HighSchoolInforComponent highSchool={highSchool} />
          <Divider>Trạng thái</Divider>
          <Steps current={currentStep} onChange={onChangeStatus} direction='vertical'>
            <Step title='Bước 1' description='Đăng ký trường cấp 3' />
            <Step title='Bước 2' description='Đăng ký slot' />
            <Step title='Bước 3' description='Lựa chọn event muốn đăng ký' />
            <Step title='Bước 4' description='Xác nhận' />
            {currentStep === 4 ? <Step status='process' title='Đang chờ xác nhận' icon={<LoadingOutlined />} /> : null}
          </Steps>
        </div>
        {currentStep === 1 ? (
          <SelectSlotContainer setCurrentSlotSelected={setCurrentSlotSelected} />
        ) : currentStep === 2 ? (
          <SelectEventContainer setCurrentEventSelected={setCurrentEventSelected} />
        ) : currentStep === 3 ? (
          <ConfirmBookingComponent
            currenSlotSelected={currenSlotSelected}
            currentEventSelected={currentEventSelected}
            handleSubmit={handleSubmit}
          />
        ) : (
          <Space direction={'vertical'}>
            <Title title={1}>Đăng ký hoàn tất</Title>
            <Text strong>Cần một lượng thời gian để trường đại học đánh giá và xác nhận thông tin event!</Text>
            <Button onClick={handleFinish} type='primary'>
              Hoàn tất
            </Button>
          </Space>
        )}
      </div>
    </Layout>
  );
};
export default BookingFlowContainer;
