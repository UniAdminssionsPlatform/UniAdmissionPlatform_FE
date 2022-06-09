import React from 'react';
import StudentTable from './StudentTable.component';
import StudetnSearchBar from './StudentSearchBar.component';

const ListStudentForHighschoolComponent = (props) => {
  const { data, setDataSearch, loading, setLoading, confirm } = props;
  return (
    <>
      <div className='flex flex-col space-y-8 xl:space-y-0 xl:flex-row'>
        <div className='flex-shrink-0 max-w-xl xl:w-80 xl:pr-8'>
          <StudetnSearchBar setDataSearch={setDataSearch} setLoading={setLoading} />
        </div>
        <StudentTable listStudent={data} loading={loading} confirm={confirm} />
      </div>
    </>
  );
};
export default ListStudentForHighschoolComponent;
