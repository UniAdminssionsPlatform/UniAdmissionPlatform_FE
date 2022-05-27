import { Button } from 'antd';
import ModalEditContainer from '../../../../../containers/student/StudentScore/modal/modalEdit.container';
import React, { useState } from 'react';

const TableScoreComponent = (props) => {
  const { score } = props;
  const [visible, setVisible] = useState(false);
  const handleVisible = () => {
    setVisible(true);
  };
  return (
    <>
      <div className='rounded-xl min-h-full text-sm border border-neutral-100 dark:border-neutral-800 p-6 md:text-base'>
        <div>
          <Button onClick={() => handleVisible()}>Chỉnh sửa điểm</Button>
        </div>
        <table style={{ textAlign: 'center', border: '3px solid #ddd', width: '100%' }}>
          <tr>
            <th style={{ textAlign: 'center', border: '3px solid #ddd', padding: '5px' }}>Toán</th>
            <th style={{ textAlign: 'center', border: '3px solid #ddd', padding: '5px' }}>Văn</th>
            <th style={{ textAlign: 'center', border: '3px solid #ddd', padding: '5px' }}>Anh</th>
            <th style={{ textAlign: 'center', border: '3px solid #ddd', padding: '5px' }}>Tổng</th>
          </tr>
          <tr>
            <td style={{ textAlign: 'center', border: '3px solid #ddd', padding: '5px' }}>8.5</td>
            <td style={{ textAlign: 'center', border: '3px solid #ddd', padding: '5px' }}>9.0</td>
            <td style={{ textAlign: 'center', border: '3px solid #ddd', padding: '5px' }}>9.0</td>
            <td style={{ textAlign: 'center', border: '3px solid #ddd', padding: '5px' }}>26.5</td>
          </tr>
        </table>
      </div>
      <ModalEditContainer visible={visible} setVisible={setVisible} />
    </>
  );
};
export default TableScoreComponent;
