import { Select } from 'antd';
import React from 'react';
const FilterScoreComponent = (props) => {
  const { subjectGroup, onChangeSubjectGroup, schoolYear, onChangeSchoolyear } = props;
  const { Option } = Select;
  return (
    <>
      <div className='rounded-xl min-h-full text-sm border border-neutral-100 dark:border-neutral-800 p-6 md:text-base'>
        <div style={{ marginBottom: 20 }}>
          Khối thi
          <Select
            showSearch
            defaultValue={1}
            onChange={onChangeSubjectGroup}
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
            {subjectGroup?.map((item) => (
              <Option value={item.id}>{item.name}</Option>
            ))}
          </Select>
        </div>
        <div style={{ marginBottom: 20 }}>
          Năm học
          <Select
            defaultValue={6}
            onChange={onChangeSchoolyear}
            style={{
              width: 120,
              marginLeft: 10
            }}
            placeholder='Năm học'
            optionFilterProp='children'
            filterOption={(input, option) => option.children.includes(input)}>
            {schoolYear?.map((item) => (
              <Option value={item.id}>{item.year}</Option>
            ))}
          </Select>
        </div>
      </div>
    </>
  );
};
export default FilterScoreComponent;
