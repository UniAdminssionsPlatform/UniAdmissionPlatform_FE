import { PATH } from '../../../constants/Paths/Path';
import { getANewPublishByEventIdService } from '../../../services/PublishService';
import { notification } from 'antd';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import SingleNewComponent from './components/SingleNew.component';
import { useDispatch } from 'react-redux';
const SingleNewContainer = (props) => {
  const { newId } = props;
  const [newDetail, setNewsDetail] = useState();
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  const newsDetail = () => {
    getANewPublishByEventIdService(newId)
      .then((result) => {
        setNewsDetail(result.data.data);
        setLoading(false);
      })
      .catch(() => {
        notification.error({
          message: 'Không tìm thấy bài viết này',
          description: `Bài viết với [ID-${newId}] không tìm thấy trong hệ thống`
        });
        history.push(PATH.PAGE_NOT_FOUND);
      });
  };
  useEffect(() => {
    newsDetail(newId);
  }, [newId]);
  return newDetail ? <SingleNewComponent newDetail={newDetail} loading={loading} /> : null;
};

export default SingleNewContainer;
