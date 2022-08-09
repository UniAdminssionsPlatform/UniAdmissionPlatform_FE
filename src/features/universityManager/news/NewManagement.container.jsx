import { Modal, notification } from 'antd';
import {
  createANewService,
  deleteANewService,
  getListNewsForUniversityService,
  setNewPublishService,
  uploadANewService
} from '../../../services/AdminUniversityService/AdminUniversityNewsService';
import { getListTagService } from '../../../services/TagService';
import { initFormNewValue } from './components/initNewValue';
import Layout from '../../../components/Layout';
import NewManagementComponent from './components/NewManagement.component';
import React, { useEffect, useState } from 'react';
import SingleNewComponent from '../../public/singleNewFeature/components/SingleNew.component';
import SingleNewContainer from '../../public/singleNewFeature/SingleNew.container';
const NewManagementContainer = () => {
  const [data, setData] = useState([]);
  const [listTag, setListTag] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const [newDescription, setNewDescription] = useState();
  const [thumbnailUrl, setThumbnailUrl] = useState();
  const [forceReloadTable, setForceReloadTable] = useState();
  const [initValueForm, setInitValueForm] = useState();
  const [isUpdate, setIsUpdate] = useState(false);
  const [selectedNew, setSelectedNew] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
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
      thumbnailUrl,
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
      id,
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
    const updateTag = [];
    setSelectedNew(data);
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
    setIsUpdate(true);
    setNewDescription(data.description);
    setInitValueForm(updateValue);
    setVisibleDrawer(true);
  };
  const handleCreateNews = () => {
    resetForm();
    setIsUpdate(false);
    setVisibleDrawer(true);
  };
  const handleUpdateNew = (data) => {
    const uploadNewPayload = {
      title: data.title,
      shortDescription: data.shortDescription,
      description: newDescription,
      thumbnailUrl: thumbnailUrl ? thumbnailUrl : selectedNew.thumbnailUrl,
      tagIds: data.tagId,
      isPublish: false
    };
    const request = {
      id: selectedNew.id,
      payload: uploadNewPayload
    };
    funcUpdateANew(request);
  };
  const funcUpdateANew = (data) => {
    uploadANewService(data)
      .then((res) => {
        setIsLoading(false);
        setVisibleDrawer(false);
        reloadTable();
        notification.success({
          message: 'Cập nhật thành công!',
          description: `Cập nhật bài viết thành công!`,
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
  //handle paging
  const handlePaging = (page, PageSize) => {
    setPayload({ ...payload, page, limit: PageSize });
  };
  //side effect handler
  useEffect(() => getListTag(), []);
  useEffect(() => funcGetListNew(), [payload, forceReloadTable]);
  const handleViewNew = (data) => {
    setSelectedNew(data);
    setIsModalVisible(true);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleDeleteNew = (payload) => {
    deleteANewService(payload.id)
      .then((res) => {
        reloadTable();
        notification.success({
          message: 'Xóa bài viết thành công!',
          description: `Xóa bài viết thành công!`,
          duration: 2
        });
      })
      .catch((err) => {
        notification.error({
          message: 'Thay đổi thất bại thất bại!',
          description: `${err.message}`,
          duration: 2
        });
      });
  };
  console.log(selectedNew);
  return (
    <>
      {selectedNew !== undefined ? (
        <Modal
          title=''
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          width={'80vw'}
          forceRender={true}>
          <SingleNewContainer newId={selectedNew?.id} />
        </Modal>
      ) : null}
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
        isUpdate={isUpdate}
        handleUpdateNew={handleUpdateNew}
        handlePaging={handlePaging}
        handleViewNew={handleViewNew}
        handleDeleteNew={handleDeleteNew}
      />
    </>
  );
};
export default NewManagementContainer;
