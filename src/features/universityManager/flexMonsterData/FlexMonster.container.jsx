import React, { useEffect, useState } from 'react';
import FlexMonsterComponent from './FlexMonster.component';
import { Layout } from 'antd';
import { getListEventPublishService } from '../../../services/EventManagementService';
import { useSelector } from 'react-redux';
import { ENDPOINT_REPORT_GET_STUDENT_RECORD_SETTING } from '../../../constants/Endpoints/ReportEndpoint';

const FlexMonsterContainer = () => {
  const { user } = useSelector((state) => state.authentication);
  const ref = React.useRef();
  const [listEvent, setListEvent] = useState();
  const [dataSearch, setDataSearch] = useState({
    universityID: 1,
    name: '',
    status: '',
    hostname: ''
  });
  const [isLoading, setIsLoading] = useState(true);
  const [requestData, setRequestData] = useState({});
  const getListEvent = () => {
    const request = {
      universityID: user.universityId,
      name: dataSearch.name ? dataSearch.name : '',
      status: dataSearch.status ? dataSearch.status : '',
      hostname: dataSearch.hostname ? dataSearch.hostname : '',
      page: 1,
      limit: 1000
    };
    getListEventPublishService(request)
      .then((res) => {
        setListEvent(res.data.data);
      })
      .catch();
  };
  const onReportComplete = () => {
    console.log('>>>>', ref.current.flexmonster.getReport());
  };
  const handleSelectEvent = () => {
    setIsLoading(false);
  };
  const onChange = (data) => {
    setIsLoading(true);
    setRequestData(`${ENDPOINT_REPORT_GET_STUDENT_RECORD_SETTING}?event-id=${data}&token=${user.token}`);
  };
  useEffect(() => getListEvent(), []);
  return (
    <Layout>
      <FlexMonsterComponent
        onReportComplete={onReportComplete}
        onChange={onChange}
        listEvent={listEvent}
        handleSelectEvent={handleSelectEvent}
        requestData={requestData}
        isLoading={isLoading}
      />
    </Layout>
  );
};
export default FlexMonsterContainer;
