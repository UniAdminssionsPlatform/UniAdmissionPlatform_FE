import { Button, Skeleton, Space } from 'antd';
import ModalAddContainer from '../../modalAdd.container';
import ModalEditContainer from '../../modalEdit.container';
import React, { useState } from 'react';

const TableScoreComponent = (props) => {
  const { data, loading } = props;
  console.log('data in Table component: ', data);
  const [visibleAdd, setVisibleAdd] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);

  return (
    <>
      <Skeleton active loading={loading}>
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
          <table style={{ textAlign: 'center', border: '3px solid #ddd', width: '100%' }}>
            <thead>
              <tr>
                {data?.map((item) => (
                  <th style={{ textAlign: 'center', border: '3px solid #ddd', padding: '5px' }}>{item.subject.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {data?.map((item) => (
                  <td style={{ textAlign: 'center', border: '3px solid #ddd', padding: '5px' }}>{item.score}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        {visibleAdd === true ? <ModalAddContainer visible={visibleAdd} setVisible={setVisibleAdd} /> : ''}
        {visibleEdit === true ? <ModalEditContainer visible={visibleEdit} setVisible={setVisibleEdit} /> : ''}
      </Skeleton>
    </>
  );
};
export default TableScoreComponent;
