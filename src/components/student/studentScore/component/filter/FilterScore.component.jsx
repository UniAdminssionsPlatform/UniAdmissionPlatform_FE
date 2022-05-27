import { Select } from 'antd';
import React from 'react';
const FilterScoreComponent = (props) => {
  const { setData } = props;
  const { Option } = Select;
  return (
    <>
      <div className='rounded-xl min-h-full text-sm border border-neutral-100 dark:border-neutral-800 p-6 md:text-base'>
        <div style={{ marginBottom: 20 }}>
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
        <div style={{ marginBottom: 20 }}>
          Năm học
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
            <Option value='1'>1990</Option>
            <Option value='2'>1999</Option>
            <Option value='3'>2018</Option>
          </Select>
        </div>
      </div>
    </>
  );
};
export default FilterScoreComponent;
