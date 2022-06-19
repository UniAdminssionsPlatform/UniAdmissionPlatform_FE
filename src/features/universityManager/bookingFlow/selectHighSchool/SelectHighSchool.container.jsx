import { Avatar, Pagination, Space, Table } from 'antd';
import { PATH_UNIVERSITY_MANAGER } from '../../../../constants/Paths/Path';
import { getListDistrictByProvince } from '../../../../services/DistrictService';
import { getListHighSchool } from '../../../../services/HighSchoolService';
import { getListProvinces } from '../../../../services/ProvinceService';
import { handleFailNotification, handleSuccessNotification } from '../../../../notification/CreateEventNotification';
import { setSelectedHighSchool } from '../../../../redux-flow/selectedHighSchool/selectedHighSchool-action';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LayoutPageWithout from '../../../../components/commons/LayoutPage/LayoutPageWithout.component';
import React, { useEffect, useState } from 'react';
import SearchBarComponent from './SearchBar.component';

const SelectHighSchoolContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isDisableDistrict, setIsDisableDistrict] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [listHighSchool, setListHighSchool] = useState();
  const [provinces, setProvinces] = useState();
  const [districts, setDistricts] = useState();
  const [dataSearch, setDataSearch] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    status: '1',
    district: '',
    page: 1,
    limit: 10
  });
  const column = [
    {
      title: 'Ảnh nền',
      dataIndex: 'thumbnailUrl',
      render: (name) => <Avatar shape='square' size='large' src={name} />,
      width: '7%'
    },
    {
      title: 'Tên trường',
      dataIndex: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
      render: (name) => `${name}`,
      width: '25%'
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
      title: 'Email',
      dataIndex: 'email',
      sorter: (a, b) => a.name.length - b.name.length,
      render: (name) => `${name}`,
      width: '20%'
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phoneNumber',
      render: (name) => `${name}`,
      width: '10%'
    },
    {
      title: 'Hành động',
      render: (id, data) => (
        <Space size='middle'>
          {data.status === 1 ? (
            <a
              className='text-primary-800 dark:text-primary-500 hover:text-primary-900'
              onClick={() => handleBookHighSchool(data)}>
              lựa chọn
            </a>
          ) : (
            <a className='text-primary-800/25 dark:text-primary-500 cursor-not-allowed'>không khả dụng</a>
          )}
          <a href='/#' className='text-rose-600 hover:text-rose-900'>
            | xem lịch sử
          </a>
        </Space>
      ),
      width: '22%'
    }
  ];
  const handleBookHighSchool = (data) => {
    dispatch(setSelectedHighSchool(data));
    history.push(PATH_UNIVERSITY_MANAGER.BOOKING_EVENT);
  };
  const geAllProvince = () => {
    getListProvinces()
      .then((result) => {
        setProvinces(result.data.data.list);
        setIsDisableDistrict(false);
      })
      .catch((err) => {
        handleFailNotification('Lỗi Khi lấy danh sách tỉnh/thành');
      });
  };
  useEffect(() => {
    getListHSchool(dataSearch);
    geAllProvince();
  }, [dataSearch]);

  const getListHSchool = (data) => {
    getListHighSchool(data)
      .then((res) => {
        setListHighSchool(res.data.data);
        setIsLoading(false);
        handleSuccessNotification('Danh sách các trường cấp 3');
      })
      .catch((err) => {
        handleFailNotification('Lỗi khi lấy danh sách');
      });
  };
  function onChangeProvince(value) {
    getListDistrictByProvince(value)
      .then((result) => {
        setDistricts(result.data.data.list);
      })
      .catch((err) => {
        handleFailNotification('Lỗi Khi lấy danh sách quận');
      });
  }
  const onShowSizeChange = (page, PageSize) => {
    setDataSearch({ ...dataSearch, page, limit: PageSize });
  };
  return (
    <>
        <div className='flex flex-col space-y-8 xl:space-y-0 xl:flex-row'>
          <div className='flex-shrink-0 max-w-xl xl:w-80 xl:pr-8'>
            <SearchBarComponent
              setDataSearch={setDataSearch}
              provinces={provinces}
              districts={districts}
              isDisableDistrict={isDisableDistrict}
              onChange={onChangeProvince}
            />
          </div>
          <Space direction={'vertical'}>
            <Table
              columns={column}
              dataSource={listHighSchool?.list}
              bordered={true}
              size='middle'
              style={{ width: '80rem' }}
              pagination={false}
              loading={isLoading}
              scroll={{ y: 700 }}
            />
            <Pagination showSizeChanger onChange={onShowSizeChange} total={listHighSchool?.total} />
          </Space>
        </div>
    </>
  );
};
export default SelectHighSchoolContainer;
