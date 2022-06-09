import { Button, Pagination, Space, Table } from 'antd';
import { bookASlotInAdminUniversity } from '../../../services/AdminUniversitySlotServices';
import { getListEventForUniversity } from '../../../services/GetListEventForUniversity';
import { refactorData } from '../../../utils/common';
import { useSelector } from 'react-redux';
import ListEvent from '../event/components/ListEvent/ListEvent.component';
import ListEventForRegisterUniversityComponent from '../event/components/ListEvent/ListEventForRegisterUniversity.component';
import React, { useEffect, useState } from 'react';
import SearchBarComponent from './components/SearchBar.component';

const ListEventForRegisterUniversityContainer = (props) => {
  const { forceLoad } = props;
  const [listEventRegister, setListEventRegister] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useSelector((state) => state.authentication);
  const { slot } = useSelector((state) => state.selectedSlot);
  const [dataSearch, setDataSearch] = useState({
    name: '',
    hostname: '',
    eventType: '',
    status: '1',
    universityID: user.universityId ? user.universityId : 1,
    page: 1,
    limit: 10
  });

  useEffect(() => {
    getEventForUniversity(dataSearch);
  }, [dataSearch, forceLoad]);

  const getEventForUniversity = (data) => {
    getListEventForUniversity(data).then((result) => {
      setListEventRegister(result.data.data);
      setIsLoading(false);
    });
  };
  const column = [
    {
      title: 'Tên Sự kiện',
      dataIndex: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
      render: (name) => `${name}`,
      width: '20%'
    },
    {
      title: 'Diễn giả',
      dataIndex: 'hostName',
      sorter: (a, b) => a.name.length - b.name.length,
      render: (name) => `${name}`,
      width: '10%'
    },
    {
      title: 'Chú giải',
      dataIndex: 'shortDescription',
      render: (name) => `${name}`,
      width: '20%'
    },
    {
      title: 'Hành Động',
      render: (status, data) => (
        <Button onClick={() => handleEditEvent(data)} type={'primary'} danger>
          Xem chi tiết
        </Button>
      ),
      width: '12%'
    }
  ];
  const handleEditEvent = (data) => {
    // bookASlotInAdminUniversity({ eventId: data, slotId: slot.data.id })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  const onShowSizeChange = (page, PageSize) => {
    setDataSearch({ ...dataSearch, page, limit: PageSize });
  };
  return (
    <div className='flex flex-col space-y-8 xl:space-y-0 xl:flex-row'>
      <div className='flex-shrink-0 max-w-xl xl:w-80 xl:pr-8'>
        <SearchBarComponent setDataSearch={setDataSearch} dataSearch={dataSearch} />
      </div>
      <Space direction={'vertical'}>
        <Table
          columns={column}
          dataSource={refactorData(listEventRegister?.list)}
          bordered={true}
          size='middle'
          style={{ width: '70rem' }}
          pagination={false}
          loading={isLoading}
          scroll={{ y: 600 }}
        />
        <Pagination showSizeChanger onChange={onShowSizeChange} total={listEventRegister?.total} />
      </Space>
    </div>
  );
};
export default ListEventForRegisterUniversityContainer;
