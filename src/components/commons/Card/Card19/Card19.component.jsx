import PostCardLikeAndComment from '../../PostCardLikeAndComment/PostCardLikeAndComment.component';
import PostCardSaveAction from '../../PostCardSaveAction/PostCardSaveAction.component';
import PostFeaturedMedia from '../../PostFeaturedMedia/PostFeaturedMedia.component';
import PostTypeFeaturedIcon from '../../PostTypeFeaturedIcon/PostTypeFeaturedIcon.component';
import ShowImageComponent from '../../../../commons/ShowImage.component';
import CategoryBadgeList from '../../CategoryBadgeList/CategoryBadgeList.component';

const Card19 = (props) => {
  const { title, event, featuredImage, categories, postType } = props;
  const renderMeta = () => {
    return (
      <div className='inline-flex items-center text-xs text-neutral-300'>
        <h2 className={`block  font-semibold text-white`}>{title}</h2>
      </div>
    );
  };

  return (
    <div className={`nc-Card19 relative flex flex-col group rounded-xl overflow-hidden`} data-nc-id='Card19'>
      <div className='absolute inset-x-0 top-0 p-3 flex items-center justify-between transition-all opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 duration-300'>
        <PostCardLikeAndComment className='relative' postData={event} />
        <PostCardSaveAction className='relative' postData={event} />
      </div>
      <div className={`flex items-start relative w-full`}></div>
      {postType === 'audio' ? (
        <div className='absolute inset-0'>
          <PostFeaturedMedia post={event} />
        </div>
      ) : (
        <>
          <ShowImageComponent
            containerClassName='absolute inset-0 rounded-xl'
            className='object-cover w-full h-full rounded-xl'
            src={featuredImage}
          />
          <PostTypeFeaturedIcon
            className='absolute top-3 left-3 group-hover:hidden'
            postType={postType}
            wrapSize='w-7 h-7'
            iconSize='w-4 h-4'
          />
          <span className='absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity'></span>
        </>
      )}
      <div className='absolute bottom-0 inset-x-0 p-5 sm:p-10 flex flex-col flex-grow'>
        {
          <div className='mb-3'>
            <CategoryBadgeList categories={categories} />
          </div>
        }
        {renderMeta()}
      </div>
    </div>
  );
};

export default Card19;
