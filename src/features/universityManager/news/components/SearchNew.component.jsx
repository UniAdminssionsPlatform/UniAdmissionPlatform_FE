import { Button, DatePicker, Divider, Select, Space } from 'antd';
import React from 'react';
import Search from 'antd/lib/input/Search';
const SearchNewComponent = (props) => {
  const { payload, setPayload, listTag } = props;
  const { Option } = Select;
  const handleSearchName = (data) => {};
  const dataSelect = [];
  listTag?.map((tag) => dataSelect.push(<Option key={tag.id}>{tag.name}</Option>));
  const handleSearchByDate = (data) => {};
  const handleSelectStatus = (data) => {};
  return (
    <>
      <Space>
        <Search
          placeholder='Nhập tên'
          allowClear
          enterButton='Tìm theo tên'
          onSearch={handleSearchName}
          value={'123'}
        />
        <DatePicker onChange={handleSearchByDate} picker='date' placeholder={'Nhập ngày tạo'} />
        <Select style={{ width: 200 }} onChange={handleSelectStatus} placeholder={'Trạng thái bài viết'}>
          <Option value='0'>Công khai</Option>
          <Option value='1'>Chưa Công khai</Option>
        </Select>
        <Select mode='multiple' showArrow style={{ width: '20rem' }} placeholder={'Nhập thể bài viết để tìm kiếm'}>
          {dataSelect}
        </Select>
      </Space>
    </>
  );
};
export default SearchNewComponent;
