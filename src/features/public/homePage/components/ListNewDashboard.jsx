import Card11 from '../../../../components/commons/Card/Card11/Card11.component';
import { Divider, Typography } from 'antd';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { PATH } from '../../../../constants/Paths/Path';
const ListNewDashboard = () => {
  const { listEventPublish, isFetching } = useSelector((state) => state.listEventPublish);
  const history = useHistory();
  const { Text, Title } = Typography;
  return (
    <div className={`nc-PageAuthorV2`} data-nc-id='PageAuthorV2'>
      <div className='py-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28'>
        <main>
          <div className='flex flex-col sm:items-center sm:justify-between sm:flex-row'>
            <div className='block my-4 border-b w-full border-neutral-100 sm:hidden'></div>
            <Divider>
              <Title level={2}>🧩 Sự kiện tuyển sinh</Title>
            </Divider>
          </div>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-8 lg:mt-10'>
            {!isFetching
              ? listEventPublish.map((event) => (
                  <div onClick={() => history.push(PATH.EVENT + event.id)} style={{ cursor: 'pointer' }}>
                    <Card11 key={event.id} event={event} />
                  </div>
                ))
              : null}
          </div>
          {/*<div className='flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center'>*/}
          {/*  <Pagination />*/}
          {/*  <ButtonPrimary>Show me more</ButtonPrimary>*/}
          {/*</div>*/}
        </main>
      </div>
    </div>
  );
};
export default ListNewDashboard;
