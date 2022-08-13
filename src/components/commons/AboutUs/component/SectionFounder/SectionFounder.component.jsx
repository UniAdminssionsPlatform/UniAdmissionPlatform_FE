import Heading from '../../../Heading/Heading.component';
import NcImage from '../../../NcImage/NcImage.component';
import React from 'react';

const FOUNDER_DEMO = [
  {
    id: '1',
    name: `Nguyễn Đình Hào`,
    job: 'Team leader, Back-end developer',
    avatar:
      'https://firebasestorage.googleapis.com/v0/b/uni-admission-platform.appspot.com/o/profile%2Fhao.jpg?alt=media&token=9020d95e-bb38-4ecc-94c2-ee48bcf94ebb'
  },
  {
    id: '2',
    name: `Nguyễn Văn Bắc`,
    job: 'Back-end developer',
    avatar:
      'https://firebasestorage.googleapis.com/v0/b/uni-admission-platform.appspot.com/o/profile%2Fbac.jpg?alt=media&token=66452dd3-9975-49c0-bb1c-bddab7b456db'
  },
  {
    id: '3',
    name: `Huỳnh Châu Bảo`,
    job: 'DevOps, Front-end developer',
    avatar:
      'https://firebasestorage.googleapis.com/v0/b/uni-admission-platform.appspot.com/o/profile%2Fbao.jpg?alt=media&token=976b0d30-b7e1-4f10-a42e-4d3bd3289d56'
  },
  {
    id: '4',
    name: `Nhâm Đức Đạt`,
    job: 'Front-end developer',
    avatar:
      'https://firebasestorage.googleapis.com/v0/b/uni-admission-platform.appspot.com/o/profile%2Fdat.png?alt=media&token=b6b0f1e2-7263-4139-9f77-5a482c75ec75'
  },
  {
    id: '5',
    name: `Nguyễn Thành Tín`,
    job: 'Front-end developer',
    avatar:
      'https://firebasestorage.googleapis.com/v0/b/uni-admission-platform.appspot.com/o/profile%2FNguyen%20Thanh%20Tin.jpg?alt=media&token=45c4f941-98a6-4534-854c-cdcaa54911e9'
  }
];

const SectionFounder = () => (
  <div className='nc-SectionFounder relative'>
    <Heading
      desc='Chúng tôi là sinh viên năm cuối của đại học FPT. Chúng tôi vô tư và độc lập và mỗi ngày chúng tôi đều tạo ra
          chương trình và nội dung giúp cuộc sống thêm phần thú vị.'>
      ⛱ Thành viên trong nhóm
    </Heading>
    <div className='grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-5 xl:gap-x-8'>
      {FOUNDER_DEMO.map((item) => (
        <div key={item.id} className='max-w-sm'>
          <NcImage
            containerClassName='relative h-0 aspect-h-1 aspect-w-1 rounded-xl overflow-hidden'
            className='absolute inset-0 object-cover'
            src={item.avatar}
          />
          <h3 className='text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200'>{item.name}</h3>
          <span className='block text-sm text-neutral-500 sm:text-base dark:text-neutral-400'>{item.job}</span>
        </div>
      ))}
    </div>
  </div>
);

export default SectionFounder;
