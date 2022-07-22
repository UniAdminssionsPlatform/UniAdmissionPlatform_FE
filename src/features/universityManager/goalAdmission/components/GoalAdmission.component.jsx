import { Button, Col, Divider, Row, Select, Skeleton, Space, Table } from 'antd';
import { Helmet } from 'react-helmet';
import AddGoalAdmissionModalContainer from '../AddGoalAdmissionModal.container';
import React, { useState } from 'react';

const GoalAdmissionComponent = (props) => {
  const { listSchoolYear, data, onChangeYear, loading, selectedSchoolYear } = props;
  const { Option } = Select;
  const [visibleAdd, setVisibleAdd] = useState(false);
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
    }
  ];

  return (
    <>
      <div className={`nc-PageAdmission`} data-nc-id='ScorePage'>
        <Helmet>
          <title>Tiêu chí tuyển sinh</title>
        </Helmet>
        <div>
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
                  onClick={() => setVisibleAdd(true)}>
                  Tạo tiêu chí tuyển sinh
                </Button>
                {/* <Button
                  disabled={disableEditButton}
                  style={{ marginBottom: '10px', borderRadius: 5 }}
                  onClick={() => setVisibleEdit(true)}>
                  Chỉnh sửa học bạ
                </Button> */}
              </Space>
            </Col>
          </Row>
          <Skeleton active loading={loading}>
            <Table pagination={false} dataSource={data} columns={columns} bordered />
          </Skeleton>
        </div>
      </div>
      {visibleAdd === true ? (
        <AddGoalAdmissionModalContainer
          isVisible={visibleAdd}
          setVisible={setVisibleAdd}
          selectedSchoolYear={selectedSchoolYear}
        />
      ) : (
        ''
      )}
    </>
  );
};
export default GoalAdmissionComponent;
