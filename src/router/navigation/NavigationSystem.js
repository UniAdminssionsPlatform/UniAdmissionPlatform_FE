import { DefaultNavigation } from './component/DefaultNavigation';
import { HIGH_SCHOOL_MANAGER, HIGH_SCHOOL_STUDENT, UNIVERSITY_MANAGER } from '../../constants/RoleType';
import { HighSchoolManagerNavigation } from './component/HighSchoolManagerNavigation';
import { HighSchoolStudentNavigation } from './component/HighSchoolStudentNavigation';
import { UniversityManagerNavigation } from './component/UniversityManagerNavigation';

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
      break;
    default:
      supperNavigation = DefaultNavigation;
  }
  return supperNavigation;
};
