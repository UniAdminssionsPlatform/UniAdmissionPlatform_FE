import { Avatar, Button, Input, Pagination, Space, Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { getListEventForUniversity } from '../../../../services/GetListEventForUniversity';
import { refactorData } from '../../../../utils/common';
import { useSelector } from 'react-redux';
import Highlighter from 'react-highlight-words';
import React, { useEffect, useRef, useState } from 'react';
const SelectEventContainer = (props) => {
  const { setCurrentEventSelected } = props;
  const { user } = useSelector((state) => state.authentication);
  const [isLoading, setIsLoading] = useState(true);
  const [listEvent, setListEvent] = useState([]);
  const [dataSearch, setDataSearch] = useState({
    name: '',
    hostname: '',
    eventType: '2',
    status: '',
    universityID: user.universityId ? user.universityId : 1,
    page: 1,
    limit: 10
  });
  useEffect(() => {
    getEventForUniversity(dataSearch);
  }, [dataSearch]);

  const getEventForUniversity = (dataSearch) => {
    const query = {
      name: dataSearch.name ? dataSearch.name : ''
    };
    getListEventForUniversity(dataSearch)
      .then((result) => {
        setListEvent(result.data.data.list);
        setIsLoading(false);
      })
      .catch((err) => {});
  };
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
      title: 'Hành Động',
      render: (status, data) => (
        <Button onClick={() => setCurrentEventSelected(data)} type={'primary'} danger>
          Lựa chọn
        </Button>
      ),
      width: '12%'
    }
  ];
  const onShowSizeChange = (page, PageSize) => {
    setDataSearch({ ...dataSearch, page, limit: PageSize });
  };
  return (
    <>
      <Space direction={'vertical'}>
        <Table
          columns={column}
          dataSource={refactorData(listEvent)}
          bordered={true}
          size='middle'
          style={{ width: '70rem' }}
          pagination={false}
          loading={isLoading}
          scroll={{ y: 600 }}
        />
        <Pagination showSizeChanger onChange={onShowSizeChange} total={listEvent?.total} />
      </Space>
    </>
  );
};
export default SelectEventContainer;
