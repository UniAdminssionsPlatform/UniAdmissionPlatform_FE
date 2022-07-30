import { Button, Select, Skeleton, Space, Table, Tooltip } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
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
    disableAddButton,
    confirmDeleteRecordItem,
    confirmDeleteSchoolRecord
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
    },
    {
      title: 'Thao tác',
      width: 100,
      render: (records) => (
        <Tooltip title='Xóa môn học khỏi học bạ'>
          <Button
            shape='circle'
            type='danger'
            icon={<CloseOutlined />}
            onClick={() => {
              confirmDeleteRecordItem(records);
            }}
          />
        </Tooltip>
      )
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
            <div className='grid grid-cols-4 gap-4'>
              <div>
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
              </div>
              <div></div>
              <div></div>
              <div>
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
                  <Button
                    onClick={() => {
                      confirmDeleteSchoolRecord();
                    }}
                    type='danger'
                    disabled={disableEditButton}
                    style={{ marginBottom: '10px', borderRadius: 5 }}>
                    Xóa học bạ
                  </Button>
                </Space>
              </div>
            </div>

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
