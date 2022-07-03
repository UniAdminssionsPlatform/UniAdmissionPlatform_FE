import { Button, Col, Row, Select, Skeleton, Space, Table } from 'antd';
import { Helmet } from 'react-helmet';
import LayoutPage from '../../../../components/commons/LayoutPage/LayoutPageWithout.component';
import ModalAddContainer from '../modalAdd.container';
import ModalEditContainer from '../modalEdit.container';
import React, { useState } from 'react';

const StudentScoreComponent = (props) => {
  const {
    className,
    schoolYear,
    onChangeSchoolYear,
    loading,
    data,
    selectedSchoolYear,
    disableEditButton,
    disableAddButton
  } = props;

  const { Option } = Select;

  const [visibleAdd, setVisibleAdd] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const columns = [
    {
      title: 'Môn học',
      render: (_, records) => <a>{records.subject.name}</a>
    },
    {
      title: 'Điểm',
      dataIndex: 'score'
    }
  ];

  return (
    <>
      <div className={`nc-PageScore ${className}`} data-nc-id='ScorePage'>
        <Helmet>
          <title>Quản lí điểm</title>
        </Helmet>
        <LayoutPage subHeading='' headingEmoji='🔑' heading=''>
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
                    onChange={onChangeSchoolYear}>
                    {schoolYear?.map((item) => (
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
                    disabled={disableAddButton}
                    style={{ marginBottom: '10px', borderRadius: 5 }}
                    onClick={() => setVisibleAdd(true)}>
                    Tạo học bạ
                  </Button>
                  <Button
                    disabled={disableEditButton}
                    style={{ marginBottom: '10px', borderRadius: 5 }}
                    onClick={() => setVisibleEdit(true)}>
                    Chỉnh sửa học bạ
                  </Button>
                </Space>
              </Col>
            </Row>
            <Skeleton active loading={loading}>
              <Table pagination={false} dataSource={data} columns={columns} bordered />
            </Skeleton>
            {visibleAdd === true ? (
              <ModalAddContainer
                visible={visibleAdd}
                setVisible={setVisibleAdd}
                selectedSchoolYear={selectedSchoolYear}
              />
            ) : (
              ''
            )}
            {visibleEdit === true ? (
              <ModalEditContainer
                visible={visibleEdit}
                setVisible={setVisibleEdit}
                selectedSchoolYear={selectedSchoolYear}
              />
            ) : (
              ''
            )}
          </div>
        </LayoutPage>
      </div>
    </>
  );
};
export default StudentScoreComponent;
