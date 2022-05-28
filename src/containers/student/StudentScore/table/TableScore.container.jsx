import { getScore } from '../../../../services/student/Score/StudentScoreService';
import { handleNotification } from '../../../../notification/StudentScoreNotification';
import React, { useEffect, useState } from 'react';
import TableScoreComponent from '../../../../components/student/studentScore/component/table/TableScore.component';

const TableScoreContainer = (props) => {
  const { subjectGroup, schoolYear } = props;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    loadData(subjectGroup, schoolYear);
  }, [subjectGroup, schoolYear]);

  const loadData = (subjectGroup, schoolYear) => {
    getScore(subjectGroup, schoolYear)
      .then((result) => {
        setData(result.data.studentRecordItems);
        setLoading(false);
        handleNotification('success');
      })
      .catch((error) => {
        handleNotification('error');
      });
  };

  return (
    <>
      <TableScoreComponent data={data} loading={loading} />
    </>
  );
};
export default TableScoreContainer;
