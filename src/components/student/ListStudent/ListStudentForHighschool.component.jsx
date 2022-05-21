import React from 'react';
import StudetnSearchBar from '../component/SearchBar/StudentSearchBar.component';
import StudentTable from '../component/Table/StudentTable.component';

const ListStudentForHighschoolComponent = (props) => {
  const { data, setDataSearch, loading, handleLockActive, confirm } = props;
  return (
    <>
      <div className='flex flex-col space-y-8 xl:space-y-0 xl:flex-row'>
        <div className='flex-shrink-0 max-w-xl xl:w-80 xl:pr-8'>
          <StudetnSearchBar setDataSearch={setDataSearch} />
        </div>
        <StudentTable listStudent={data} loading={loading} confirm={confirm} />
      </div>
    </>
  );
};
export default ListStudentForHighschoolComponent;
