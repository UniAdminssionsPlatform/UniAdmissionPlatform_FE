import { getAllPendingAccount } from '../../../services/HighSchoolRepresentativesSerive';
import AccountPendinglComponent from './components/AccountPending.component';
import React, { useEffect, useState } from 'react';
import { GetListNotification } from '../../../notification/HighSchoolRepresentativesPendingNotification';

const AccountPendingContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    getAllPendingAccount()
      .then((result) => {
        setData(result.data.data.list);
        GetListNotification('success');
        setLoading(false);
      })
      .catch((error) => {
        GetListNotification('error', error.response.data.msg);
      });
  };

  return (
    <>
      <AccountPendinglComponent data={data} loading={loading} />
    </>
  );
};
export default AccountPendingContainer;
