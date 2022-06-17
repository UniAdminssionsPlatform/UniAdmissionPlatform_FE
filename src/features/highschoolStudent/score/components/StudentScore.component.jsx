import { Button, Col, Row, Select, Skeleton, Space, Table } from 'antd';
import { Helmet } from 'react-helmet';
import FilterScoreComponent from './filter/FilterScore.component';
import LayoutPage from '../../../../components/commons/LayoutPage/LayoutPageWithout.component';
import ModalAddContainer from '../modalAdd.container';
import ModalEditContainer from '../modalEdit.container';
import React, { useState } from 'react';
import TableScoreContainer from '../TableScore.container';

const StudentScoreComponent = (props) => {
  const { className, schoolYear, onChangeSchoolYear, loading, setLoading, searchLoading, data } = props;

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
            {/* <div className='flex-shrink-0 max-w-xl xl:w-80 xl:pr-8'>
                <FilterScoreComponent
                  loading={searchLoading}
                  schoolYear={schoolYear}
                  subjectGroup={subjectGroup}
                  onChangeSubjectGroup={onChangeSubjectGroup}
                  onChangeSchoolYear={onChangeSchoolYear}
                />
              </div>
              <div className='border border-neutral-100 dark:border-neutral-800 md:hidden'></div>
              <div className='flex-grow'>
                <TableScoreContainer
                  subjectGroup={selectedSubjectGroup}
                  schoolYear={selectedSchoolYear}
                  loading={loading}
                  setLoading={setLoading}
                />
              </div> */}

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
                    style={{ marginBottom: '10px', borderRadius: 5 }}
                    onClick={() => setVisibleAdd(true)}>
                    Tạo học bạ
                  </Button>
                  <Button style={{ marginBottom: '10px', borderRadius: 5 }} onClick={() => setVisibleEdit(true)}>
                    Chỉnh sửa điểm
                  </Button>
                </Space>
              </Col>
            </Row>
            <Skeleton active loading={loading}>
              <Table pagination={false} dataSource={data} columns={columns} bordered />
            </Skeleton>
            {visibleAdd === true ? <ModalAddContainer visible={visibleAdd} setVisible={setVisibleAdd} /> : ''}
            {visibleEdit === true ? <ModalEditContainer visible={visibleEdit} setVisible={setVisibleEdit} /> : ''}
          </div>
        </LayoutPage>
      </div>
    </>
  );
};
export default StudentScoreComponent;
