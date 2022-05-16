import React from 'react';

const MajorTableComponent = (props) => {
  const { data } = props;
  return (
    <>
      <table style={{ textAlign: 'left', border: '3px solid #ddd' }}>
        <tr>
          <th style={{ textAlign: 'left', border: '3px solid #ddd', padding: '5px' }}>Tên Ngành</th>
          <th style={{ textAlign: 'center', border: '3px solid #ddd', padding: '5px' }}>Mã Ngành</th>
        </tr>
        {data?.map((item) => (
          <tr key={item.id}>
            <td style={{ textAlign: 'left', border: '3px solid #ddd', padding: '5px' }}>{item.name}</td>
            <td style={{ textAlign: 'center', border: '3px solid #ddd', padding: '5px' }}>{item.code}</td>
          </tr>
        ))}
      </table>
    </>
  );
};
export default MajorTableComponent;
