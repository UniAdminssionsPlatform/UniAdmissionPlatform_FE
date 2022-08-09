import { Button, Divider, Image, Input, Modal, Pagination, Space, Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { getListEventForUniversity } from '../../../../services/GetListEventForUniversity';
import { refactorData } from '../../../../utils/common';
import { useSelector } from 'react-redux';
import Highlighter from 'react-highlight-words';
import React, { useEffect, useRef, useState } from 'react';
import PreviewIcon from '@mui/icons-material/Preview';
import { COLOR_ICON } from '../../../../constants/Color';
import SingleEventContainer from '../../../public/singleEventFeature/SingleEvent.container';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const SelectEventContainer = (props) => {
  const { setCurrentEventSelected } = props;
  const { user } = useSelector((state) => state.authentication);
  const [isLoading, setIsLoading] = useState(true);
  const [listEvent, setListEvent] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentSelectedEvent, setCurrentSelectedEvent] = useState({});
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
        console.log(result.data.data.list);
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
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
      width: '15%'
    },
    {
      title: 'Ảnh bìa',
      dataIndex: 'thumbnailUrl',
      render: (url) => <Image src={url} />,
      width: '15%'
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
      width: '25%'
    },
    {
      title: 'Hành Động',
      render: (status, data) => (
        <Space direction='horizontal' style={{ width: '100%', justifyContent: 'center' }}>
          <PreviewIcon
            onClick={() => {
              setCurrentSelectedEvent(data);
              showModal();
            }}
            style={{ cursor: 'pointer', color: COLOR_ICON }}
            fontSize={'large'}
            className={`hover:fill-neutral-100`}
          />
          <Divider type={'vertical'} />
          <CheckCircleIcon
            onClick={() => setCurrentEventSelected(data)}
            style={{ cursor: 'pointer', color: COLOR_ICON }}
            fontSize={'large'}
            className={`hover:fill-neutral-100`}
          />
        </Space>
      ),
      width: '10%'
    }
  ];
  const onShowSizeChange = (page, PageSize) => {
    setDataSearch({ ...dataSearch, page, limit: PageSize });
  };
  return (
    <>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={'80vw'}>
        <SingleEventContainer eventId={currentSelectedEvent?.id} />
      </Modal>
      <Space direction={'vertical'}>
        <Table
          columns={column}
          dataSource={refactorData(listEvent)}
          bordered={true}
          size='small'
          pagination={false}
          loading={isLoading}
          style={{ width: '65vw' }}
          scroll={{ x: 700, y: 450 }}
        />
        <Pagination showSizeChanger onChange={onShowSizeChange} total={listEvent?.total} />
      </Space>
    </>
  );
};
export default SelectEventContainer;
