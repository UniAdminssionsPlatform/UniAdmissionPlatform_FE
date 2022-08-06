import React from 'react';
import SearchBar from './AccountSearchBar.component';
import Table from './AccountPendingTable.component';

const AccountPendingComponent = (props) => {
  const { data, setDataSearch, loading, setLoading, handleOk, dataSearch, total, onChangePage } = props;
  return (
    <>
      <div className='flex flex-col space-y-8 xl:space-y-0 xl:flex-row'>
        <div className='flex-shrink-0 max-w-xl xl:w-80 xl:pr-8'>
          <SearchBar dataSearch={dataSearch} setDataSearch={setDataSearch} setLoading={setLoading} />
        </div>
        <Table data={data} loading={loading} handleOk={handleOk} total={total} onChangePage={onChangePage} />
      </div>
    </>
  );
};
export default AccountPendingComponent;
