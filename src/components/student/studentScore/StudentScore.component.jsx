import { Helmet } from 'react-helmet';
import FilterScore from './component/filter/FilterScore.component';
import LayoutPage from '../../commons/LayoutPage/LayoutPageWithout.component';
import React from 'react';
import TableScore from './component/table/TableScore.component';

const StudentScoreComponent = (props) => {
  const { className } = props;

  return (
    <>
      <div className={`nc-PageScore ${className}`} data-nc-id='ScorePage'>
        <Helmet>
          <title>Quản lí điểm</title>
        </Helmet>
        <LayoutPage subHeading='' headingEmoji='🔑' heading=''>
          <div>
            <div className='flex flex-col space-y-6 xl:space-y-0 xl:flex-row'>
              <div className='flex-shrink-0 max-w-xl xl:w-80 xl:pr-8'>
                <FilterScore />
              </div>
              <div className='border border-neutral-100 dark:border-neutral-800 md:hidden'></div>
              <div className='flex-grow'>
                <TableScore />
              </div>
            </div>
          </div>
        </LayoutPage>
      </div>
    </>
  );
};
export default StudentScoreComponent;
