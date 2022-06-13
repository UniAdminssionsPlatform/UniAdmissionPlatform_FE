import { Helmet } from 'react-helmet';
import FilterScoreComponent from './filter/FilterScore.component';
import LayoutPage from '../../../../components/commons/LayoutPage/LayoutPageWithout.component';
import React from 'react';
import TableScoreContainer from '../TableScore.container';

const StudentScoreComponent = (props) => {
  const {
    className,
    subjectGroup,
    onChangeSubjectGroup,
    selectedSubjectGroup,
    selectedSchoolYear,
    schoolYear,
    onChangeSchoolYear,
    loading,
    setLoading,
    searchLoading
  } = props;

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
                <FilterScoreComponent
                  loading={searchLoading}
                  schoolYear={schoolYear}
                  subjectGroup={subjectGroup}
                  onChangeSubjectGroup={onChangeSubjectGroup}
                  onChangeSchoolYear={onChangeSchoolYear}
                />
              </div>
              <div className='border border-neutral-100 dark:border-neutral-800 md:hidden'></div>
              <div className='flex-grow'>
                <TableScoreContainer
                  subjectGroup={selectedSubjectGroup}
                  schoolYear={selectedSchoolYear}
                  loading={loading}
                  setLoading={setLoading}
                />
              </div>
            </div>
          </div>
        </LayoutPage>
      </div>
    </>
  );
};
export default StudentScoreComponent;
