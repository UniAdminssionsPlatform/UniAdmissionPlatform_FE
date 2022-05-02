import LayoutPageWithout from '../commons/LayoutPage/LayoutPageWithout.component';
import SearchBarComponent from './component/SearchBar/SearchBar.component';
import ListEventForUniversity from './listEventForUniversity.component';

const ListEventForUniversityForm = () => {
  return (
    <LayoutPageWithout
      LayoutPage
      subHeading='Danh sách các trường cấp 3 có thể tổ chức sự kiện tuyển sinh'
      headingEmoji='⚙'
      heading='Dash board'>
      <div className='flex flex-col space-y-8 xl:space-y-0 xl:flex-row'>
        <div className='flex-shrink-0 max-w-xl xl:w-80 xl:pr-8'>
          <div>
            <ListEventForUniversity />
          </div>
          <SearchBarComponent />
        </div>
      </div>
    </LayoutPageWithout>
  );
};

export default ListEventForUniversityForm;
