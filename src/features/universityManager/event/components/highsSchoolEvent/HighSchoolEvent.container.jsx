import { getListDistrictByProvince } from '../../../../../services/DistrictService';
import { getListHighSchool } from '../../../../../services/HighSchoolService';
import { getListProvinces } from '../../../../../services/ProvinceService';
import { handleFailNotification, handleSuccessNotification } from '../../../../../notification/CreateEventNotification';
import { useSelector } from 'react-redux';
import HighSchoolComponent from './components/HighSchoolEvent.component';
import LayoutPageWithout from '../../../../../components/commons/LayoutPage/LayoutPageWithout.component';
import React, { useEffect, useState } from 'react';

const HighSchoolEventContainer = () => {
  const [listHighSchool, setListHighSchool] = useState();
  const [provinces, setProvinces] = useState();
  const [districts, setDistricts] = useState();
  const [dataSearch, setDataSearch] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    status: '',
    district: ''
  });
  const { isSelected, highSchool } = useSelector((state) => state.selectedHighSchool);
  const [isClicked, setIsClicked] = useState(isSelected ? isSelected : false);

  const geAllProvince = () => {
    getListProvinces()
      .then((result) => {
        setProvinces(result.data.data.list);
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
        setListHighSchool(res.data.data.list);
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

  return (
    <>
      <LayoutPageWithout subHeading='Chọn một trường để đăng ký sự kiện'>
        <HighSchoolComponent
          provinces={provinces}
          districts={districts}
          listHighSchool={listHighSchool}
          onChange={onChangeProvince}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          setDataSearch={setDataSearch}
        />
      </LayoutPageWithout>
    </>
  );
};
export default HighSchoolEventContainer;
