import React, { useEffect, useState } from 'react';
import { getAHighSchoolProfileByIdService } from '../../../services/PublishService';
import { notification } from 'antd';
import { PATH } from '../../../constants/Paths/Path';
import SingleHighSchoolProfileComponent from './components/SingleHighSchoolProfile.component';
import { useHistory } from 'react-router-dom';
const SingleHighSchoolProfileContainer = (props) => {
  const [highSchoolProfile, setHighSchoolProfile] = useState();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState();
  const { highSchoolId } = props;
  const getHighSchoolById = () => {
    getAHighSchoolProfileByIdService(highSchoolId)
      .then((result) => {
        setHighSchoolProfile(result.data.data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(true);
        notification.error({
          message: 'Không tìm thấy trường cấp 3 này',
          description: `Trường cấp 3 với [ID-${highSchoolId}] không tìm thấy trong hệ thống`
        });
        history.push(PATH.PAGE_NOT_FOUND);
      });
  };
  useEffect(() => getHighSchoolById(getHighSchoolById), []);
  return !isLoading ? <SingleHighSchoolProfileComponent highSchoolProfile={highSchoolProfile} /> : null;
};
export default SingleHighSchoolProfileContainer;
