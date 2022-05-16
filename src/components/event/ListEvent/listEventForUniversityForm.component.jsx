import LayoutPageWithout from '../../commons/LayoutPage/LayoutPageWithout.component';
import ListEventForUniversity from './listEventForUniversity.component';
import SearchBarComponent from './SearchBar.component';

const ListEventForUniversityForm = (props) => {
  const { eventforuniversity, setDataSearch } = props;
  return (
    <div className='flex flex-col space-y-20 xl:space-y-0 xl:flex-row'>
      <div>
        <SearchBarComponent setDataSearch={setDataSearch} />
      </div>
      <div className='shadow dark:border dark:border-neutral-800 overflow-hidden sm:rounded-lg ml-12'>
        <ListEventForUniversity eventforuniversity={eventforuniversity} />
      </div>
    </div>
  );
};

export default ListEventForUniversityForm;
