import { HeartOutlined } from '@ant-design/icons';
import { getListTag } from '../../../services/TagService';
import CreateEventComponent from './components/CreateNew.compomnent';
import LayoutPageWithout from '../../../components/commons/LayoutPage/LayoutPageWithout.component';
import React, { useEffect, useState } from 'react';

const CreateNewContainer = () => {
  const [listTag, setListTag] = useState();
  const getListTagAvailable = () => {
    getListTag()
      .catch((res) => {
        setListTag(res.data.data);
      })
      .then((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getListTagAvailable();
  }, []);
  return (
    <>
      <CreateEventComponent listTag={listTag} />
    </>
  );
};

export default CreateNewContainer;
