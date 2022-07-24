import PostFeaturedMedia from '../../PostFeaturedMedia/PostFeaturedMedia.component';
import PostCardLikeAndComment from '../../PostCardLikeAndComment/PostCardLikeAndComment.component';
import PostCardSaveAction from '../../PostCardSaveAction/PostCardSaveAction.component';
import ShowImageComponent from '../../../../commons/ShowImage.component';
import PostTypeFeaturedIcon from '../../PostTypeFeaturedIcon/PostTypeFeaturedIcon.component';

const Card18 = (props) => {
  const { event } = props;
  console.log(event);
  const renderMeta = () => {
    return (
      <div className='inline-flex items-center text-xs text-neutral-300'>
        <h2 className={`block font-semibold text-white `}>{event.title}</h2>
      </div>
    );
  };

  return (
    <div className={`nc-Card18 relative flex flex-col group rounded-xl overflow-hidden`} data-nc-id='Card18'>
      <div className='absolute inset-x-0 top-0 p-3 flex items-center justify-between transition-all opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 duration-300'>
        <PostCardLikeAndComment className='relative' postData={event} />
        <PostCardSaveAction className='relative' postData={event} />
      </div>
      <div className={`flex items-start relative w-full`}></div>
      {event.postType === 'audio' ? (
        <div className='absolute inset-0'>
          <PostFeaturedMedia post={event} />
        </div>
      ) : (
        <>
          <ShowImageComponent
            containerClassName='absolute inset-0 rounded-xl'
            className='object-cover w-full h-full rounded-xl'
            src={event.featuredImage}
          />
          <PostTypeFeaturedIcon
            className='absolute top-3 left-3 group-hover:hidden'
            postType={event.postType}
            wrapSize='w-7 h-7'
            iconSize='w-4 h-4'
          />
          <span className='absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity'></span>
        </>
      )}
      <div className='absolute bottom-0 inset-x-0 p-6 flex flex-col flex-grow'>
        {<div className='mb-3'>{/*<CategoryBadgeList categories={categories} />*/}</div>}
        {renderMeta()}
      </div>
    </div>
  );
};

export default Card18;
