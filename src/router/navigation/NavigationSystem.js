import { HIGH_SCHOOL_MANAGER, HIGH_SCHOOL_STUDENT, UNIVERSITY_MANAGER } from '../../constants/RoleType';
import { HighSchoolStudentNavigation } from './component/HighSchoolStudentNavigation';
import { HighSchoolManagerNavigation } from './component/HighSchoolManagerNavigation';
import { UniversityManagerNavigation } from './component/UniversityManagerNavigation';
import { DefaultNavigation } from './component/DefaultNavigation';

export const NavigationSystem = (role) => {
  let supperNavigation = [];
  switch (role) {
    case HIGH_SCHOOL_STUDENT:
      supperNavigation = HighSchoolStudentNavigation;
      break;
    case HIGH_SCHOOL_MANAGER:
      supperNavigation = HighSchoolManagerNavigation;
      break;
    case UNIVERSITY_MANAGER:
      supperNavigation = UniversityManagerNavigation;
    default:
      supperNavigation = DefaultNavigation;
  }
  return supperNavigation;
};
