import {
  createANewService,
  getListNewsForUniversityService,
  setNewPublishService
} from '../../../services/AdminUniversityNewsService';
import { getListTagService } from '../../../services/TagService';
import { notification } from 'antd';
import NewManagementComponent from './components/NewManagement.component';
import React, { useEffect, useState } from 'react';
import { initFormNewValue } from './components/initNewValue';
const NewManagementContainer = () => {
  const [data, setData] = useState([]);
  const [listTag, setListTag] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const [newDescription, setNewDescription] = useState();
  const [thumbnailUrl, setThumbnailUrl] = useState();
  const [forceReloadTable, setForceReloadTable] = useState();
  const [initValueForm, setInitValueForm] = useState();
  //payload
  const [payload, setPayload] = useState({
    sort: 'CreateDate desc',
    page: 1,
    limit: 10,
    tags: '',
    createDate: '',
    title: '',
    isPublish: ''
  });
  //payload handler
  const handleOnChangePayload = () => ({
    sort: payload?.sort ? payload.sort : '',
    page: payload?.page ? payload.page : 1,
    limit: payload?.limit ? payload.limit : 10,
    createDate: payload?.createDate ? payload.createDate : '',
    tags: payload?.tags ? payload.tags : [],
    title: payload?.title ? payload.title : '',
    isPublish: payload?.isPublish ? payload.isPublish : ''
  });
  //force reload table
  const reloadTable = () => {
    setForceReloadTable(Math.random());
  };
  //calling api
  const funcGetListNew = () => {
    getListNewsForUniversityService(handleOnChangePayload(payload))
      .then((res) => {
        setData(res.data.data);
        setIsLoading(false);
        notification.success({
          message: 'Truy vấn thành công!',
          description: `Lấy thông tin các bài viết thành công!`,
          duration: 2
        });
      })
      .catch((err) => {
        setIsLoading(true);
        notification.error({
          message: 'Truy vấn thất bại!',
          description: `${err.message}`,
          duration: 2
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
  //create new handler
  const handleCreateNew = (data) => {
    const createANewPayload = {
      title: data.title,
      shortDescription: data.shortDescription,
      description: newDescription,
      thumbnailUrl: thumbnailUrl,
      tagIds: data.tagId,
      isPublish: false
    };
    funcCreateANew(createANewPayload);
  };
  const funcCreateANew = (data) => {
    createANewService(data)
      .then((res) => {
        reloadTable();
        setIsLoading(false);
        setVisibleDrawer(false);
        resetForm();
        notification.success({
          message: 'Tạo mới thành công!',
          description: `Tạo mới bài viết thành công!`,
          duration: 2
        });
      })
      .catch((err) => {
        setIsLoading(true);
        notification.error({
          message: 'Tạo mới thất bại!',
          description: `${err.message}`,
          duration: 2
        });
      });
  };
  //handel reset form
  const resetForm = () => {
    setThumbnailUrl('');
    setNewDescription('');
    setInitValueForm(initFormNewValue);
  };
  //handle change status news
  const changeStatusNew = (data, id) => {
    const changeStatusPayload = {
      id: id,
      payload: {
        isPublish: data
      }
    };
    funcChangeStatusNew(changeStatusPayload);
  };
  const funcChangeStatusNew = (data) => {
    setNewPublishService(data)
      .then((res) => {
        setIsLoading(false);
        reloadTable();
        notification.success({
          message: 'Thay đổi thành công!',
          description: `Thay đổi trạng thái bài viết thành công!`,
          duration: 2
        });
      })
      .catch((err) => {
        setIsLoading(true);
        notification.error({
          message: 'Thay đổi thất bại thất bại!',
          description: `${err.message}`,
          duration: 2
        });
      });
  };
  //handle update new
  const handleUpdateANew = (data) => {
    console.log(data);
    const updateTag = [];
    data.tagList.map((res) => {
      updateTag.push(res.name);
    });
    const updateValue = [
      {
        name: ['title'],
        value: data.title
      },
      {
        name: ['tagId'],
        value: updateTag
      },
      {
        name: ['shortDescription'],
        value: data.shortDescription
      },
      {
        name: ['wallpaper'],
        value: data.thumbnailUrl
      }
    ];
    setNewDescription(data.description);
    setInitValueForm(updateValue);
    setVisibleDrawer(true);
  };
  const handleCreateNews = () => {
    resetForm()
    setVisibleDrawer(true);
  };
  //side effect handler
  useEffect(() => getListTag(), []);
  useEffect(() => funcGetListNew(), [payload, forceReloadTable]);
  return (
    <NewManagementComponent
      data={data}
      listTag={listTag}
      setPayload={setPayload}
      payload={payload}
      visibleDrawer={visibleDrawer}
      setVisibleDrawer={setVisibleDrawer}
      newDescription={newDescription}
      setNewDescription={setNewDescription}
      setThumbnailUrl={setThumbnailUrl}
      handleCreateNew={handleCreateNew}
      changeStatusNew={changeStatusNew}
      isLoading={isLoading}
      initValueForm={initValueForm}
      handleUpdateANew={handleUpdateANew}
      handleCreateNews={handleCreateNews}
    />
  );
};
export default NewManagementContainer;
