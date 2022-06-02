import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { changeStatus } from '../../../services/ChangeStatusService';
import {
  handActiveNotification,
  handleLockNotification
} from '../../../notification/ChangeStatusStudentNotification.js';
import { handleNotification } from '../../../notification/ListStudentForHighschoolNotification';
import { useSelector } from 'react-redux';
import ListStudentForHighschoolComponent from '../../../components/student/ListStudent/ListStudentForHighschool.component';
import React, { useEffect, useState } from 'react';
import { getListStudentByHighSchool } from '../../../services/Accounts/Accounts.service';

const ListStudentForHighschoolContainer = () => {
  const { user } = useSelector((state) => state.authentication);

  const [students, setStudents] = useState();
  const [loading, setLoading] = useState(true);
  const [dataSearch, setDataSearch] = useState({
    firstName: '',
    phone: '',
    email: '',
    status: '',
    highschoolID: user.highSchoolId
  });

  useEffect(() => {
    loadData(dataSearch);
  }, [dataSearch]);

  const loadData = (data) => {
    getListStudentByHighSchool(data)
      .then((result) => {
        setStudents(result.data.data.list);
        setLoading(false);
        handleNotification('success');
      })
      .catch((error) => {
        handleNotification('error');
      });
  };

  const handleOk = (student) => {
    changeStatus(student.id)
      .then((result) => {
        loadData(dataSearch);
        if (student.status === 2)
          handleLockNotification('success', `${student.lastName} ${student.middleName} ${student.firstName}`);

        if (student.status === 3)
          handActiveNotification('success', `${student.lastName} ${student.middleName} ${student.firstName}`);
      })
      .catch((error) => {
        if (student.status === 'lock') handleLockNotification('error');

        if (student.status === 'active') handActiveNotification('error');
      });
  };

  const confirm = (value) => {
    let context;

    if (value.status === 2) context = `Khóa ${value.lastName} ${value.middleName} ${value.firstName} ?`;
    if (value.status === 3) context = `Mở khóa cho ${value.lastName} ${value.middleName} ${value.firstName} ?`;
    Modal.confirm({
      title: 'Xác thực',
      icon: <ExclamationCircleOutlined />,
      content: context,
      okText: 'Có',
      cancelText: 'Không',
      onOk() {
        handleOk(value);
      },
      onCancel() {
        console.log('Cancel');
      }
    });
  };

  return (
    <>
      <ListStudentForHighschoolComponent
        data={students}
        setDataSearch={setDataSearch}
        loading={loading}
        confirm={confirm}
      />
    </>
  );
};
export default ListStudentForHighschoolContainer;
