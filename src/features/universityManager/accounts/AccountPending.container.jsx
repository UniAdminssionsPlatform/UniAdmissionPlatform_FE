import {
  ActiveNotification,
  GetListNotification
} from '../../../notification/HighSchoolRepresentativesPendingNotification';
import { activeAccount, getAllPendingAccount } from '../../../services/UniversityRepresentatives';
import AccountPendingComponent from './components/AccountPending.component';
import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import TitlePageComponent from '../../../components/decorator/TitlePage.component';

const AccountPendingContainer = () => {
  const [data, setData] = useState([]);
  const [dataSearch, setDataSearch] = useState({
    firstName: '',
    email: '',
    phone: '',
    limit: 10,
    page: 1
  });
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState();

  useEffect(() => {
    loadData({
      'first-name': dataSearch.firstName ? dataSearch.firstName : '',
      'email-contact': dataSearch.email ? dataSearch.email : '',
      'phone-number': dataSearch.phone ? dataSearch.phone : '',
      limit: dataSearch.limit,
      page: dataSearch.page
    });
  }, [dataSearch]);

  const loadData = (value) => {
    getAllPendingAccount(value)
      .then((result) => {
        setData(result.data.data.list);
        setTotal(result.data.data.total);
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
      'phone-number': dataSearch.phone ? dataSearch.phone : '',
      limit: dataSearch.limit,
      page: dataSearch.page
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

  const onChangePage = (page) => {
    setDataSearch({ ...dataSearch, page, limit: 10 });
  };

  return (
    <Layout>
      <TitlePageComponent
        title={'Xét duyệt tài khoản'}
        subTitle={
          'Bạn có thể tìm kiếm tài khoản cần được xét duyệt bằng tên, email và số điện thoại. Thực hiện thao tác xét duyệt trong panel dưới đây'
        }
      />
      <AccountPendingComponent
        data={data}
        loading={loading}
        setDataSearch={setDataSearch}
        setLoading={setLoading}
        handleOk={handleOk}
        total={total}
        onChangePage={onChangePage}
        dataSearch={dataSearch}
      />
    </Layout>
  );
};
export default AccountPendingContainer;
