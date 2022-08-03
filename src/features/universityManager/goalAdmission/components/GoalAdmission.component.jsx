import { Button, Col, Divider, Drawer, Row, Select, Skeleton, Space, Table, Tooltip } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet';
import AddGoalAdmissionFormContainer from '../AddGoalAdmissionForm.container';
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { COLOR_ICON } from '../../../../constants/Color';
const GoalAdmissionComponent = (props) => {
  const { listSchoolYear, data, onChangeYear, loading, selectedSchoolYear, loadingHeader, confirmDelete } = props;
  const { Option } = Select;
  const [visibleAdd, setVisibleAdd] = useState(false);

  const onCloseDrawer = () => {
    setVisibleAdd(false);
  };

  const showLargeDrawer = () => {
    setVisibleAdd(true);
  };

  const columns = [
    {
      title: 'Ngành',
      dataIndex: 'parentProgramName',
      key: 'parentProgramName'
    },
    {
      title: 'Mã Ngành',
      dataIndex: 'parentProgramCode',
      key: 'parentProgramCode'
    },
    {
      title: 'Chuyên ngành',
      width: '30%',
      render: (record) => (
        <>
          {record.majors?.map((item) => (
            <>
              {item.name} <Divider type='vertical' />{' '}
            </>
          ))}
        </>
      )
    },
    {
      title: 'Mã tổ hợp',
      width: '15%',
      render: (record) => (
        <>
          {record.subjectGroups?.map((item) => (
            <>
              {item.name} <Divider type='vertical' />{' '}
            </>
          ))}
        </>
      )
    },
    {
      title: 'Chỉ tiêu',
      dataIndex: 'sumOfQuantity',
      key: 'sumOfQuantity'
    },
    {
      title: 'Thao tác',
      render: (record) => (
        <Tooltip title='Xóa'>
          <Space direction='horizontal' style={{ width: '100%', justifyContent: 'center' }}>
            <DeleteIcon
              onClick={() => {
                confirmDelete(record);
              }}
              style={{ cursor: 'pointer', color: COLOR_ICON }}
              className={`hover:fill-neutral-100`}
            />
          </Space>
        </Tooltip>
      ),
      width: '7%'
    }
  ];

  return (
    <>
      <div className={`nc-PageAdmission`} data-nc-id='ScorePage'>
        <Helmet>
          <title>Tiêu chí tuyển sinh</title>
        </Helmet>
        <div>
          <Skeleton active loading={loadingHeader}>
            <Row justify='space-between'>
              <Col span={4}>
                <Space>
                  Năm học
                  <Select
                    defaultValue={6}
                    style={{
                      width: 120,
                      marginLeft: 10
                    }}
                    onChange={onChangeYear}>
                    {listSchoolYear?.map((item) => (
                      <Option value={item.id}>{item.year}</Option>
                    ))}
                  </Select>
                </Space>
              </Col>
              <Col span={2}></Col>
              <Col span={2}></Col>
              <Col span={4}>
                <Space>
                  <Button
                    type='primary'
                    // disabled={disableAddButton}
                    style={{ marginBottom: '10px', borderRadius: 5 }}
                    onClick={showLargeDrawer}>
                    Thêm tiêu chí tuyển sinh
                  </Button>
                </Space>
              </Col>
            </Row>
          </Skeleton>
          <Skeleton active loading={loading}>
            <Table pagination={false} dataSource={data} columns={columns} bordered />
          </Skeleton>
        </div>
      </div>
      <Drawer
        title='Thêm tiêu chí tuyển sinh'
        placement='right'
        size='large'
        onClose={onCloseDrawer}
        visible={visibleAdd}>
        <AddGoalAdmissionFormContainer selectedSchoolYear={selectedSchoolYear} />
      </Drawer>
    </>
  );
};
export default GoalAdmissionComponent;
