import SingleNewComponent from './components/SingleNew.component';
import React, { useEffect, useState } from 'react';
import { getANewPublishByEventIdService } from '../../../services/PublishService';
import { notification } from 'antd';
import { PATH } from '../../../constants/Paths/Path';
const SingleNewContainer = (props) => {
  const { newId } = props;
  const [newDetail, setNewsDetail] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    newsDetail(newId);
  }, [newId]);
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
  return <SingleNewComponent newDetail={newDetail} loading={loading} />;
};

export default SingleNewContainer;
