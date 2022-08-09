import React, { useEffect, useState } from 'react';
import { getAUniversityProfileByIdService } from '../../../services/PublishService';
import { notification } from 'antd';
import { PATH } from '../../../constants/Paths/Path';
import SingleUniversityProfileComponent from './component/SingleUniversityProfile.component';
import { useHistory } from 'react-router-dom';
const SingleUniversityProfileContainer = (props) => {
  const [universityProfile, setUniversityProfile] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const { universityId } = props;
  const getUniversityProfileById = () => {
    getAUniversityProfileByIdService(universityId)
      .then((result) => {
        setUniversityProfile(result.data.data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(true);
        notification.error({
          message: 'Không tìm thấy trường đại họcnày',
          description: `Trường đại học với [ID-${universityId}] không tìm thấy trong hệ thống`
        });
        history.push(PATH.PAGE_NOT_FOUND);
      });
  };
  useEffect(() => getUniversityProfileById(), []);
  return !isLoading ? <SingleUniversityProfileComponent universityProfile={universityProfile} /> : null;
};
export default SingleUniversityProfileContainer;
