import { getListNewsForUniversityService } from '../../../services/AdminUniversityNewsService';
import { getListTagService } from '../../../services/TagService';
import { notification } from 'antd';
import NewManagementComponent from './components/NewManagement.component';
import React, { useEffect, useState } from 'react';
const NewManagementContainer = () => {
  const { payload, setPayload } = useState({
    sort: 'ASC' || 'DESC',
    page: 1,
    limit: 10,
    tag: [],
    createDate: '',
    title: '',
    isPublish: true
  });
  const [data, setData] = useState([]);
  const [listTag, setListTag] = useState([]);
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const handleOnChangePayload = () => ({
    sort: payload?.sort ? payload.sort : '',
    page: payload?.page ? payload.page : 1,
    limit: payload?.limit ? payload.limit : 10,
    createDate: payload?.createDate ? payload.createDate : '',
    tags: payload?.tag.length < 0 ? payload.tag : [],
    title: payload?.title ? payload.title : '',
    isPublish: payload?.isPublish ? payload.isPublish : ''
  });
  const funcGetListNew = () => {
    getListNewsForUniversityService(handleOnChangePayload(payload))
      .then((res) => {
        setData(res.data.data);
        notification.success({
          message: 'Truy vấn thành công!',
          description: `Lấy thông tin các bài viết thành công!`,
          duration: 1
        });
      })
      .catch((err) => {
        notification.error({
          message: 'Truy vấn thất bại!',
          description: `${err.message}`,
          duration: 1
        });
      });
  };
  const getListTag = () => {
    getListTagService()
      .catch()
      .then((res) => {
        setListTag(res.data.data.list);
      });
  };
  useEffect(() => getListTag(), []);
  useEffect(() => funcGetListNew(), [payload]);
  return (
    <NewManagementComponent
      data={data}
      listTag={listTag}
      visibleDrawer={visibleDrawer}
      setVisibleDrawer={setVisibleDrawer}
    />
  );
};
export default NewManagementContainer;
