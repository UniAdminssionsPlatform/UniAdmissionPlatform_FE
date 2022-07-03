import {
  ActiveNotification,
  GetListNotification
} from '../../../notification/HighSchoolRepresentativesPendingNotification';
import { activeAccount, getAllPendingAccount } from '../../../services/HighSchoolRepresentativesSerive';
import AccountPendinglComponent from './components/AccountPending.component';
import React, { useEffect, useState } from 'react';

const AccountPendingContainer = () => {
  const [data, setData] = useState([]);
  const [dataSearch, setDataSearch] = useState({
    firstName: '',
    email: '',
    phone: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData({
      'first-name': dataSearch.firstName ? dataSearch.firstName : '',
      'email-contact': dataSearch.email ? dataSearch.email : '',
      'phone-number': dataSearch.phone ? dataSearch.phone : ''
    });
  }, [dataSearch]);

  const loadData = (value) => {
    getAllPendingAccount(value)
      .then((result) => {
        setData(result.data.data.list);
        GetListNotification('success');
        setLoading(false);
      })
      .catch((error) => {
        GetListNotification('error', error.response.data.msg);
      });
  };

  const reload = () => {
    loadData({
      'first-name': dataSearch.firstName ? dataSearch.firstName : '',
      'email-contact': dataSearch.email ? dataSearch.email : '',
      'phone-number': dataSearch.phone ? dataSearch.phone : ''
    });
  };

  const handleOk = (value) => {
    activeAccount({
      'user-id': value.id
    })
      .then((result) => {
        setLoading(true);
        ActiveNotification('success', result.data.msg);
        setTimeout(reload, 2000);
      })
      .catch((error) => {
        ActiveNotification('error', error.response.data.msg);
      });
  };

  return (
    <>
      <AccountPendinglComponent
        data={data}
        loading={loading}
        setDataSearch={setDataSearch}
        setLoading={setLoading}
        handleOk={handleOk}
      />
    </>
  );
};
export default AccountPendingContainer;
