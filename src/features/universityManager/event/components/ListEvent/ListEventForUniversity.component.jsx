import ListEvent from './ListEvent.component';
import SearchBarComponent from './SearchBar.component';

const ListEventForUniversity = (props) => {
  const { listEventRegister, setDataSearch } = props;
  return (
    <div className='flex flex-col space-y-20 xl:space-y-0 xl:flex-row'>
      <div>
        <SearchBarComponent setDataSearch={setDataSearch} />
      </div>
      <div className='shadow dark:border dark:border-neutral-800 overflow-hidden sm:rounded-lg ml-12'>
        <ListEvent eventforuniversity={listEventRegister} />
      </div>
    </div>
  );
};

export default ListEventForUniversity;
