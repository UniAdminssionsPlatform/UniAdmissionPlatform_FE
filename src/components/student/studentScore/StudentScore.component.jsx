import { Helmet } from 'react-helmet';
import FilterScoreComponent from '../../../components/student/studentScore/component/filter/FilterScore.component';
import LayoutPage from '../../commons/LayoutPage/LayoutPageWithout.component';
import React from 'react';
import TableScoreContainer from '../../../containers/student/StudentScore/table/TableScore.container';

const StudentScoreComponent = (props) => {
  const {
    className,
    subjectGroup,
    onChangeSubjectGroup,
    selectedSubjectGroup,
    selectedSchoolYear,
    schoolYear,
    onChangeSchoolyear
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
                  schoolYear={schoolYear}
                  subjectGroup={subjectGroup}
                  onChangeSubjectGroup={onChangeSubjectGroup}
                  onChangeSchoolyear={onChangeSchoolyear}
                />
              </div>
              <div className='border border-neutral-100 dark:border-neutral-800 md:hidden'></div>
              <div className='flex-grow'>
                <TableScoreContainer subjectGroup={selectedSubjectGroup} schoolYear={selectedSchoolYear} />
              </div>
            </div>
          </div>
        </LayoutPage>
      </div>
    </>
  );
};
export default StudentScoreComponent;
