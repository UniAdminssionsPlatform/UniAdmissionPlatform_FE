import { DEMO_AUTHORS } from '../../../../data/authors';
import { DEMO_CATEGORIES } from '../../../../data/taxonomies';
import { DEMO_POSTS } from '../../../../data/posts';
import ArchiveFilterListBox from '../../../../components/commons/ArchiveFilterListBox/ArchiveFilterListBox.component';
import BackgroundSection from '../../../../components/commons/BackgroundSection/BackgroundSection.component';
import ButtonPrimary from '../../../../components/field/ButtonPrimary/ButtonPrimary.component';
import ButtonSecondary from '../../../../components/field/ButtonSecondary/ButtonSecondary.component';
import Card11 from '../../../../components/commons/Card/Card11/Card11.component';
import Pagination from '../../../../components/commons/Pagination/Pagination';
import SectionGridCategoryBox from '../../../../components/commons/SectionGridCategoryBox/SectionGridCategoryBox.component';
import SectionSliderNewAuthors from '../../../../components/commons/SectionSliderNewAuthors/SectionSliderNewAuthors.component';

const posts = DEMO_POSTS.filter((_, i) => i < 12);
const AUTHOR = DEMO_AUTHORS[0];
const FILTERS = [
  { name: 'Most Recent' },
  { name: 'Curated by Admin' },
  { name: 'Most Appreciated' },
  { name: 'Most Discussed' },
  { name: 'Most Viewed' }
];
const TABS = ['Articles', 'Favorites', 'Saved'];

const ListNewComponent = () => {
  return (
    <div className={`nc-PageAuthorV2`} data-nc-id='PageAuthorV2'>
      <div className='container py-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28'>
        <main>
          <div className='flex flex-col sm:items-center sm:justify-between sm:flex-row'>
            <div className='block my-4 border-b w-full border-neutral-100 sm:hidden'></div>
            <div className='flex justify-end'>
              <ArchiveFilterListBox lists={FILTERS} />
            </div>
          </div>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-8 lg:mt-10'>
            {posts.map((post) => (
              <Card11 key={post.id} post={post} />
            ))}
          </div>
          <div className='flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center'>
            <Pagination />
            <ButtonPrimary>Show me more</ButtonPrimary>
          </div>
        </main>
        <div className='relative py-16'>
          <BackgroundSection />
          <SectionGridCategoryBox categories={DEMO_CATEGORIES.filter((_, i) => i < 10)} />
          <div className='text-center mx-auto mt-10 md:mt-16'>
            <ButtonSecondary>Show me more</ButtonSecondary>
          </div>
        </div>
        <SectionSliderNewAuthors
          heading='Top elite authors'
          subHeading='Discover our elite writers'
          authors={DEMO_AUTHORS.filter((_, i) => i < 10)}
          uniqueSliderClass='PageAuthorV2'
        />
      </div>
    </div>
  );
};

export default ListNewComponent;
