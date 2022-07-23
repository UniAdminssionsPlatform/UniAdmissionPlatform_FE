import './SearchNew.style.css';
import { DatePicker, Divider, Select, Space } from 'antd';
import React from 'react';
import Search from 'antd/lib/input/Search';
import moment from 'moment';
const SearchNewComponent = (props) => {
  const { payload, setPayload, listTag } = props;
  const { Option } = Select;
  const handleSearchName = (data) => {
    setPayload({ ...payload, title: data });
  };
  const dataSelect = [];
  listTag?.map((tag) => dataSelect.push(<Option key={tag.id}>{tag.name}</Option>));
  const handleSearchByDate = (data) => {
    if (data !== null) setPayload({ ...payload, createDate: moment(data).format() });
    else setPayload({ ...payload, createDate: '' });
  };
  const handleSelectStatus = (data) => {
    setPayload({ ...payload, isPublish: data });
  };
  const handleChangeTag = (data) => {
    if (data.length !== 0) {
      let pd = '';
      pd = '%5B';
      data.map((dt) => {
        if (data.length > 1) {
          if (data[data.length - 1] === dt) pd = pd + dt;
          else pd = `${pd + dt}%2C`;
        } else pd = pd + dt;
      });
      pd = `${pd}%5D`;
      setPayload({ ...payload, tags: pd });
    } else setPayload({ ...payload, tags: '' });
  };
  return (
    <div>
      <Space>
        <Search placeholder='Nhập tên' allowClear enterButton='Tìm theo tên' onSearch={handleSearchName} />
        <DatePicker onChange={handleSearchByDate} picker='date' placeholder={'Nhập ngày tạo'} />
        <Select style={{ width: 200 }} onChange={handleSelectStatus} placeholder={'Trạng thái bài viết'}>
          <Option value='true'>Công khai</Option>
          <Option value='false'>Chưa Công khai</Option>
          <Option value=''>Tất cả trạng thái</Option>
        </Select>
        <Select
          mode='multiple'
          showArrow
          style={{ width: '20rem' }}
          placeholder={'Nhập thể bài viết để tìm kiếm'}
          onChange={handleChangeTag}>
          {dataSelect}
        </Select>
      </Space>
    </div>
  );
};
export default SearchNewComponent;
