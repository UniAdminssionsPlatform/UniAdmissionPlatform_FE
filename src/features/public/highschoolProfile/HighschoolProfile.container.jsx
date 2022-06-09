import { getDetailHighSchool } from '../../../services/HighSchoolService';
import { useSelector } from 'react-redux';
import HighSchoolProfileComponent from './components/HighSchoolProfile.component';
import React, { useEffect, useState } from 'react';

const HighSchoolProfileContainer = () => {
  const [highSchool, setHighSchool] = useState();
  const [loading, setLoading] = useState(true);
  const { user } = useSelector((state) => state.authentication);

  useEffect(() => {
    loadData(user.highSchoolId);
  }, [user.highSchoolId]);

  const loadData = (id) => {
    getDetailHighSchool(id).then((result) => {
      setHighSchool(result.data.data);
      setLoading(false);
    });
  };
  return (
    <>
      <HighSchoolProfileComponent highSchool={highSchool} loading={loading} />
    </>
  );
};
export default HighSchoolProfileContainer;
