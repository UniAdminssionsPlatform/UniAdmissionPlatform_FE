import { DEMO_AUTHORS } from '../../../../data/authors';
import { DEMO_CATEGORIES } from '../../../../data/taxonomies';
import { DEMO_POSTS } from '../../../../data/posts';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import ArchiveFilterListBox from '../../../../components/commons/ArchiveFilterListBox/ArchiveFilterListBox.component';
import Avatar from '../../../../components/commons/Avatar/Avatar.component';
import BackgroundSection from '../../../../components/commons/BackgroundSection/BackgroundSection.component';
import ButtonPrimary from '../../../../components/field/ButtonPrimary/ButtonPrimary.component';
import ButtonSecondary from '../../../../components/field/ButtonSecondary/ButtonSecondary.component';
import Card11 from '../../../../components/commons/Card/Card11/Card11.component';
import HeadBackgroundCommon from '../../../../components/commons/HeadBackgroundCommon/HeadBackgroundCommon.component';
import Nav from '../../../../components/commons/Nav/Nav.component';
import NavItem from '../../../../components/commons/NavItem/NavItem.component';
import Pagination from '../../../../components/commons/Pagination/Pagination';
import SectionGridCategoryBox from '../../../../components/commons/SectionGridCategoryBox/SectionGridCategoryBox.component';
import SectionSliderNewAuthors from '../../../../components/commons/SectionSliderNewAuthors/SectionSliderNewAuthors.component';
import SocialsList from '../../../../components/commons/SocialsList/SocialsList.component';

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

const ListNewComponent = ({ className }) => {
  const [tabActive, setTabActive] = useState(TABS[0]);

  const handleClickTab = (item) => {
    if (item === tabActive) return;

    setTabActive(item);
  };

  return (
    <div className={`nc-PageAuthorV2  ${className}`} data-nc-id='PageAuthorV2'>
      <Helmet>
        <title>Author || Blog Magazine React Template</title>
      </Helmet>
      <HeadBackgroundCommon className='h-24 2xl:h-28' />
      <div className='container'>
        <header className='max-w-xl mx-auto -mt-10 flex flex-col items-center justify-center text-center lg:-mt-14'>
          <Avatar
            containerClassName='ring-4 ring-white dark:ring-0 shadow-2xl'
            imgUrl={AUTHOR.avatar}
            sizeClass='w-20 h-20 text-lg lg:w-28 lg:h-28 lg:text-xl'
            radius='rounded-3xl'
          />
          <h2 className='block align-middle mt-4 font-semibold text-2xl text-neutral-900 lg:text-3xl dark:text-neutral-100'>
            {AUTHOR.displayName}
          </h2>
          <span className='mt-2 block text-sm text-neutral-6000 dark:text-neutral-300 md:text-base'>{AUTHOR.desc}</span>
          <SocialsList className='mt-3' />
        </header>
      </div>
      <div className='container py-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28'>
        <main>
          <div className='flex flex-col sm:items-center sm:justify-between sm:flex-row'>
            <Nav className='sm:space-x-2'>
              {TABS.map((item, index) => (
                <NavItem key={index} isActive={tabActive === item} onClick={() => handleClickTab(item)}>
                  {item}
                </NavItem>
              ))}
            </Nav>
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
