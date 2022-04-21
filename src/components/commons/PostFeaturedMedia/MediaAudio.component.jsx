import ButtonPlayMusicRunningContainer from '../../../containers/commons/ButtonPlayMusicRunningContainer/ButtonPlayMusicRunningContainer.container';
import React from 'react';

const MediaAudio = ({ post }) => (
  <ButtonPlayMusicRunningContainer
    className='absolute bg-neutral-900 bg-opacity-30 flex items-center justify-center inset-0'
    post={post}
  />
);

export default MediaAudio;
