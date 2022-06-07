import { Avatar, Button, Input, Pagination, Space, Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { getListEventForUniversity } from '../../../../services/GetListEventForUniversity';
import { useSelector } from 'react-redux';
import Highlighter from 'react-highlight-words';
import React, { useEffect, useRef, useState } from 'react';
const SelectEventContainer = (props) => {
  const { setCurrentEventSelected } = props;
  const { highSchool } = useSelector((state) => state.selectedHighSchool);
  const [isLoading, setIsLoading] = useState(true);
  const [listEvent, setListEvent] = useState([]);
  const [dataSearch, setDataSearch] = useState({
    name: '',
    hostname: '',
    eventType: '3',
    status: '',
    universityID: highSchool.id
  });
  useEffect(() => {
    getEventForUniversity(dataSearch);
  }, [dataSearch]);

  const getEventForUniversity = (data) => {
    getListEventForUniversity(data)
      .then((result) => {
        console.log(result);
        setListEvent(result.data.data.list);
        setIsLoading(false);
      })
      .catch((err) => {});
  };

  const mockData = [
    {
      event: {
        id: 1,
        name: 'Event so 1',
        shortDescription: 'string',
        description: 'string',
        thumbnailUrl: 'string',
        fileUrl: 'string',
        status: 2,
        hostName: 'string',
        eventTypeId: 3,
        address: 'string',
        provinceId: null,
        meetingUrl: 'string',
        districtId: 270,
        startTime: '2022-05-27T06:39:58',
        endTime: '2022-05-28T06:39:58'
      },
      universityId: 1
    }
  ];
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    if (dataIndex === 'hostName') setDataSearch({ ...dataSearch, hostname: selectedKeys[0] });

    if (dataIndex === 'name') setDataSearch({ ...dataSearch, name: selectedKeys[0] });
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const refactorData = (listData) => {
    const result = [];
    listData.map((data) => {
      result.push(data.event);
    });
    return result;
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div
        style={{
          padding: 8
        }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block'
          }}
        />
        <Space>
          <Button
            type='primary'
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size='small'
            style={{
              width: 90
            }}>
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size='small'
            style={{
              width: 90
            }}>
            Reset
          </Button>
          <Button
            type='link'
            size='small'
            onClick={() => {
              confirm({
                closeDropdown: false
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}>
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined
        }}
      />
    ),
    onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) setTimeout(() => searchInput.current?.select(), 100);
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      )
  });
  const column = [
    {
      title: 'Tên Sự kiện',
      dataIndex: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
      render: (name) => `${name}`,
      ...getColumnSearchProps('name'),
      width: '20%'
    },
    {
      title: 'Diễn giả',
      dataIndex: 'hostName',
      sorter: (a, b) => a.name.length - b.name.length,
      render: (name) => `${name}`,
      ...getColumnSearchProps('hostName'),
      width: '10%'
    },
    {
      title: 'Chú giải',
      dataIndex: 'shortDescription',
      render: (name) => `${name}`,
      width: '20%'
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      render: (status, data) =>
        status === 1 ? (
          <span className='px-2 inline-flex text-xs leading-5 font-medium rounded-full bg-teal-100 text-teal-900 lg:text-sm'>
            Đã Kích Hoạt
          </span>
        ) : (
          <span className='px-2 inline-flex text-xs leading-5 font-medium rounded-full bg-red-100 text-teal-900 lg:text-sm'>
            Đang Bị Đóng
          </span>
        ),
      width: '12%'
    },
    {
      title: 'Hành Động',
      render: (status, data) => (
        <Button onClick={() => setCurrentEventSelected(data)} type={'primary'} danger>
          Lựa chọn
        </Button>
      ),
      width: '12%'
    }
  ];
  return (
    <>
      <Table
        columns={column}
        dataSource={refactorData(mockData)}
        bordered={true}
        size='middle'
        style={{ width: '70rem' }}
        pagination={false}
        loading={isLoading}
        scroll={{ y: 600 }}
      />
      {/*<Pagination showSizeChanger onChange={onShowSizeChange} total={listHighSchool?.total} />*/}
    </>
  );
};
export default SelectEventContainer;
