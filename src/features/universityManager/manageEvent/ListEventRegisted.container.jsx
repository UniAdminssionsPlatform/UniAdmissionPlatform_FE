import { Button, Pagination, Space, Table, Tag } from 'antd';
import { EVENT, EVENT_HS, EVENT_ONLINE, EVENT_ORG, EVENT_UNI } from '../../../constants/AppConst';
import { getListEventCheck } from '../../../services/AdminUniversityEventService';
import { refactorData } from '../../../utils/common';
import { useSelector } from 'react-redux';
import { useStateWithCallback } from '../../../components/CustomHOOK/SyncUseState';
import React, { useEffect, useState } from 'react';
const ListEventRegisteredContainer = () => {
  const [listEvent, setListEvent] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useSelector((state) => state.authentication);
  const [dataSearch, setDataSearch] = useStateWithCallback({
    status: '',
    universityID: user?.universityId,
    page: 1,
    limit: 10
  });
  const getListEventRegistered = () => {
    getListEventCheck(dataSearch)
      .catch((res) => {
        console.log(res);
        setListEvent(res.data);
        setIsLoading(false);
      })
      .then();
  };
  const onShowSizeChange = () => {};
  useEffect(() => {
    getListEventRegistered();
  });
  const column = [
    {
      title: 'Tên Sự kiện',
      dataIndex: 'name',
      render: (name) => `${name}`,
      width: '20%'
    }
  ];
  return (
    <>
      <Space direction={'vertical'}>
        <Table
          columns={column}
          dataSource={refactorData(listEvent?.list)}
          bordered={true}
          size='middle'
          style={{ width: '100rem' }}
          pagination={false}
          loading={isLoading}
          scroll={{ y: 600 }}
        />
        {listEvent?.total > 10 ? (
          <Pagination showSizeChanger onChange={onShowSizeChange} total={listEvent?.total} />
        ) : null}
      </Space>
    </>
  );
};
export default ListEventRegisteredContainer;
