import ListEvent from './ListEvent.component';
import React from 'react';
import SearchBarComponent from './SearchBar.component';
const ListEventForRegisterUniversityComponent = (props) => {
  const { listEventRegister, setDataSearch, handleBookingSlot } = props;
  return (
    <div>
      <div>
        <SearchBarComponent setDataSearch={setDataSearch} />
      </div>
      <div>
        <ListEvent listEventRegister={listEventRegister} handleBookingSlot={handleBookingSlot} />
      </div>
    </div>
  );
};
export default ListEventForRegisterUniversityComponent;
