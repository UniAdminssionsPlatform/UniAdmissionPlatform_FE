import { CheckCircleTwoTone } from '@ant-design/icons';
import { CreateGoalAdmisisonsNotification } from '../../../notification/GoalAdmisisonNotification';
import { Modal, Form } from 'antd';
import { addGoalAdmission } from '../../../services/GoalAdmissionService';
import { getAllMajorDepartment } from '../../../services/MajorDepartmentService';
import { getAllSubjectGroup } from '../../../services/SubjectGroupService';
import { getSchoolYear } from '../../../services/SchoolYearService';
import { useSelector } from 'react-redux';
import AddGoalAdmisisonFormComponent from './components/form/AddGoalAdmissionForm.component';
import React, { useEffect, useState } from 'react';

const AddGoalAdmissionFormContainer = (props) => {
  const { user } = useSelector((state) => state.authentication);
  const { selectedSchoolYear } = props;

  const [schoolYear, setSchoolYear] = useState('');
  const [listMajorDepartment, setListMajorDepartment] = useState([]);
  const [listSubjectGroup, setListSubjectGroup] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form] = Form.useForm();

  useEffect(() => {
    getYear(selectedSchoolYear);
    getMajorDepartments({
      'university-id': user.universityId,
      limit: 1000
    });
    getSubjectGroups();
  }, [selectedSchoolYear]);

  const getYear = (data) => {
    setLoading(true);
    getSchoolYear(data).then((result) => {
      setSchoolYear(result.data.data.year);
      setLoading(false);
    });
  };

  const getMajorDepartments = (data) => {
    setLoading(true);
    getAllMajorDepartment(data).then((result) => {
      setListMajorDepartment(result.data.data.list);
      setLoading(false);
    });
  };

  const getSubjectGroups = (data) => {
    setLoading(true);
    getAllSubjectGroup(data).then((result) => {
      setListSubjectGroup(result.data.data.list);
      setLoading(false);
    });
  };

  const onChangeMajor = (value) => {};

  const onChangeSubjectGroup = (value) => {};

  const countDown = () => {
    let secondsToGo = 5;
    const modal = Modal.confirm({
      title: 'Thêm tiêu chí tuyển sinh thành công',
      icon: <CheckCircleTwoTone twoToneColor='#52c41a' />,
      content: `Bạn có muốn tiếp tục thêm tiêu chí tuyển sinh ? Thông báo này sẽ tắt sau ${secondsToGo} giây.`,
      okText: 'Có',
      cancelText: 'Không',
      onOk() {
        Modal.destroyAll();
        form.resetFields();
      },
      onCancel() {
        window.location.reload();
      }
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
      modal.update({
        content: `Bạn có muốn tiếp tục thêm tiêu chí tuyển sinh ? Thông báo này sẽ tắt sau ${secondsToGo} giây.`
      });
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      modal.destroyAll();
      window.location.reload();
    }, secondsToGo * 1000);
  };

  const onFinish = (values) => {
    values.name = `Tiêu chí tuyển sinh năm ${schoolYear}`;
    values.description = `Tiêu chí và Điểm chuẩn của trường năm ${schoolYear}`;
    values.schoolYearId = selectedSchoolYear;
    addGoalAdmission(values)
      .then((result) => {
        countDown();
      })
      .then((error) => {
        CreateGoalAdmisisonsNotification('error', error.response.data.msg);
      });
  };
  return (
    <>
      <AddGoalAdmisisonFormComponent
        listMajorDepartment={listMajorDepartment}
        listSubjectGroup={listSubjectGroup}
        schoolYear={schoolYear}
        onChangeMajor={onChangeMajor}
        onChangeSubjectGroup={onChangeSubjectGroup}
        onFinish={onFinish}
        loading={loading}
        form={form}
      />
    </>
  );
};
export default AddGoalAdmissionFormContainer;
