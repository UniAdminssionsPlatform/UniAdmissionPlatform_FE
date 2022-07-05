import { Button, Col, Row, Select, Skeleton, Space, Table, Divider } from 'antd';
import { Helmet } from 'react-helmet';
import LayoutPage from '../../../../components/commons/LayoutPage/LayoutPageWithout.component';
import React from 'react';

const GoalAdmissionComponent = (props) => {
  const { listSchoolYear, data, onChangeYear, loading } = props;
  const { Option } = Select;
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
                    onChange={onChangeYear}>
                    {listSchoolYear?.map((item) => (
                      <Option value={item.id}>{item.year}</Option>
                    ))}
                  </Select>
                </Space>
              </Col>
              {/* <Col span={2}></Col>
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
              </Col> */}
            </Row>
            <Skeleton active loading={loading}>
              <Table pagination={false} dataSource={data} columns={columns} bordered />
            </Skeleton>
            {/* {visibleAdd === true ? (
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
            )} */}
          </div>
        </LayoutPage>
      </div>
    </>
  );
};
export default GoalAdmissionComponent;
