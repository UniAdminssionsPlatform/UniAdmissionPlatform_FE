import {
  CountStudentFollowService,
  FollowUniversityService,
  Following
} from '../../../services/FollowUniversityService';
import { FollowSuccessNotification, UnFollowSuccessNotification } from '../../../notification/FollowNotification';
import { UniversityDetail } from '../../../services/UniversityDetail';
import React, { useEffect, useState } from 'react';
import UniversityProfileComponent from '../../universityManager/universityProfile/components/UniversityProfile.component';

const UniversityProfileToFollowContainer = (props) => {
  const { universityID } = props;
  const [universityDetail, setUniversityDetail] = useState('');
  const [followed, setFollowed] = useState('');
  const [countStudent, setCountStudent] = useState();

  const reload = () => {
    window.location.reload();
  };

  //Count
  const CountStudentFollowed = (universityID) => {
    CountStudentFollowService(universityID).then((result) => {
      setCountStudent(result.data.data);
    });
  };

  //Follow Button
  const handleFollowButton = (value) => {
    FollowUniversityService({
      universityId: value.id
    })
      .then((result) => {
        FollowSuccessNotification('success', result.data.msg);
        setTimeout(reload, 1000);
      })
      .catch((error) => {
        FollowSuccessNotification('error', error.response.data.msg);
      });
  };

  //Unfollow Button
  const handleUnFollowButton = (value) => {
    FollowUniversityService({
      universityId: value.id
    })
      .then((result) => {
        UnFollowSuccessNotification('success', result.data.msg);
        setTimeout(reload, 1000);
      })
      .catch((error) => {
        UnFollowSuccessNotification('error', error.response.data.msg);
      });
  };

  const checkFollowed = (universityID) => {
    Following(universityID).then((result) => {
      setFollowed(result.data.data);
    });
  };

  useEffect(() => {
    checkFollowed(universityID);
    CountStudentFollowed(universityID);
  }, [universityID]);

  useEffect(() => {
    uniDetail(universityID);
  }, [universityID]);

  const uniDetail = (universityID) => {
    UniversityDetail(universityID).then((result) => {
      setUniversityDetail(result.data.data);
    });
  };
  return (
    <>
      <UniversityProfileComponent
        universityDetail={universityDetail}
        followed={followed}
        handleFollowButton={handleFollowButton}
        handleUnFollowButton={handleUnFollowButton}
        countStudent={countStudent}
      />
    </>
  );
};

export default UniversityProfileToFollowContainer;
