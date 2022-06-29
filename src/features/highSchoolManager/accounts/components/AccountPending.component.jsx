import React from 'react';
import SearchBar from './AccountSearchBar.component';
import Table from './AccountPendingTable.component';

const AccountPendinglComponent = (props) => {
  const { data, setDataSearch, loading, setLoading, confirm } = props;
  return (
    <>
      <div className='flex flex-col space-y-8 xl:space-y-0 xl:flex-row'>
        <div className='flex-shrink-0 max-w-xl xl:w-80 xl:pr-8'>
          <SearchBar setDataSearch={setDataSearch} setLoading={setLoading} />
        </div>
        <Table data={data} loading={loading} confirm={confirm} />
      </div>
    </>
  );
};
export default AccountPendinglComponent;
