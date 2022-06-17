import { Button, Skeleton, Space, Table } from 'antd';
import ModalAddContainer from '../../modalAdd.container';
import ModalEditContainer from '../../modalEdit.container';
import React, { useState } from 'react';

const TableScoreComponent = (props) => {
  const { data, loading } = props;
  const [visibleAdd, setVisibleAdd] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);

  const columns = [
    {
      title: 'Môn học',
      dataIndex: 'name'
    },
    {
      title: 'Điểm',
      dataIndex: 'score'
    }
  ];
  const dataFake = [
    {
      key: '1',
      name: 'Toán',
      score: 10,
      repayment: 33
    },
    {
      key: '2',
      name: 'Lý',
      score: 100,
      repayment: 0
    },
    {
      key: '3',
      name: 'Hóa',
      score: 10,
      repayment: 10
    },
    {
      key: '4',
      name: 'Sinh',
      score: 75,
      repayment: 45
    },
    {
      key: '5',
      name: 'Sinh',
      score: 75,
      repayment: 45
    },
    {
      key: '6',
      name: 'Sinh',
      score: 75,
      repayment: 45
    },
    {
      key: '7',
      name: 'Sinh',
      score: 75,
      repayment: 45
    },
    {
      key: '8',
      name: 'Sinh',
      score: 75,
      repayment: 45
    },
    {
      key: '9',
      name: 'Sinh',
      score: 75,
      repayment: 45
    }
  ];

  return (
    <>
      <Skeleton active loading={false}>
        <div className='rounded-xl min-h-full text-sm border border-neutral-100 dark:border-neutral-800 p-6 md:text-base'>
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
          <Table pagination={false} dataSource={data} columns={columns} bordered />
        </div>
        {visibleAdd === true ? <ModalAddContainer visible={visibleAdd} setVisible={setVisibleAdd} /> : ''}
        {visibleEdit === true ? <ModalEditContainer visible={visibleEdit} setVisible={setVisibleEdit} /> : ''}
      </Skeleton>
    </>
  );
};
export default TableScoreComponent;
