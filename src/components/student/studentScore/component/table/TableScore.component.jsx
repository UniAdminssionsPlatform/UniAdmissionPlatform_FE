import { Button, Skeleton } from 'antd';
import ModalEditContainer from '../../../../../containers/student/StudentScore/modal/modalEdit.container';
import React, { useState } from 'react';

const TableScoreComponent = (props) => {
  const { data, loading } = props;
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Skeleton active loading={loading}>
        <div className='rounded-xl min-h-full text-sm border border-neutral-100 dark:border-neutral-800 p-6 md:text-base'>
          <div>
            <Button onClick={() => setVisible(true)}>Chỉnh sửa điểm</Button>
          </div>

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
        {visible === true ? <ModalEditContainer visible={visible} setVisible={setVisible} /> : ''}
      </Skeleton>
    </>
  );
};
export default TableScoreComponent;
