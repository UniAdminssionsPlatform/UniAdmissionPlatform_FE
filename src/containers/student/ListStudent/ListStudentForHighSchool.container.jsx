import React, { useEffect, useState } from 'react';
import ListStudentForHighschoolComponent from '../../../components/student/ListStudent/ListStudentForHighschool.component';
import { useSelector } from 'react-redux';
import { getListStudentByHighschool } from '../../../services/student/ListStudent/ListStudentService';

const ListStudentForHighschoolContainer = () => {
  const { user } = useSelector((state) => state.authentication);
  const [students, setStudents] = useState();
  const [loading, setLoading] = useState(true);
  const [dataSearch, setDataSearch] = useState({
    firstName: '',
    phone: '',
    email: '',
    highschoolID: user.highSchoolId
  });

  useEffect(() => {
    loadData(dataSearch);
  }, [dataSearch]);

  const loadData = (data) => {
    getListStudentByHighschool(data).then((result) => {
      setStudents(result.data.data.list);
      setLoading(false);
    });
  };

  return (
    <>
      <ListStudentForHighschoolComponent data={students} setDataSearch={setDataSearch} loading={loading} />
    </>
  );
};
export default ListStudentForHighschoolContainer;
