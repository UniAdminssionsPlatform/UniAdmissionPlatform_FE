import { Button, Select } from 'antd';
import { Helmet } from 'react-helmet';
import LayoutPage from '../../commons/LayoutPage/LayoutPageWithout.component';
import React from 'react';

const StudentScoreComponent = (props) => {
  const { className } = props;
  const { Option } = Select;
  return (
    <>
      <div className={`nc-PageLogin ${className}`} data-nc-id='ScorePage'>
        <Helmet>
          <title>Quản lí điểm</title>
        </Helmet>
        <LayoutPage subHeading='' headingEmoji='🔑' heading=''>
          <div>
            <div>Họ và tên: Nguyễn Thành Tín</div>
            <div className='rounded-xl md:border md:border-neutral-100 dark:border-neutral-800 md:p-6'>
              <div style={{ marginBottom: 20 }}>
                <div>
                  <div>
                    {' '}
                    Khối thi
                    <Select
                      showSearch
                      defaultValue='1'
                      style={{
                        width: 120,
                        marginLeft: 10
                      }}
                      placeholder='Khối ngành'
                      optionFilterProp='children'
                      filterOption={(input, option) => option.children.includes(input)}
                      filterSort={(optionA, optionB) =>
                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                      }>
                      <Option value='1'>A00</Option>
                      <Option value='2'>A01</Option>
                      <Option value='3'>A02</Option>
                    </Select>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <Button>Chỉnh sửa điểm</Button>
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
            </div>
          </div>
        </LayoutPage>
      </div>
    </>
  );
};
export default StudentScoreComponent;
