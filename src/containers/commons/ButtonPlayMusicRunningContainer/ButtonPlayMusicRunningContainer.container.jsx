import {
  addNewListPostAudio,
  changeCurrentMediaRunning,
  changeStateMediaRunning,
  selectCurrentMediaRunning
} from '../../../app/mediaRunning/mediaRunning';
import { useAppDispatch, useAppSelector } from '../../../app/hook';
import LoadingVideo from '../../../components/commons/LoadingVideo/LoadingVideo.component';
import PostTypeFeaturedIcon from '../../../components/commons/PostTypeFeaturedIcon/PostTypeFeaturedIcon.component';
import React, { useEffect } from 'react';
import iconPlaying from '../../../images/icon-playing.gif';
import isSafariBrowser from '../../../utils/isSafariBrowser';

const ButtonPlayMusicRunningContainer = ({
  className,
  post,
  renderChildren,
  renderDefaultBtn,
  renderLoadingBtn,
  renderPlayingBtn
}) => {
  const currentMediaRunning = useAppSelector(selectCurrentMediaRunning);
  const dispatch = useAppDispatch();

  // STATE
  const mediaState = currentMediaRunning.state;

  //
  useEffect(() => {
    // check safari
    if (!post || !isSafariBrowser()) return;

    dispatch(addNewListPostAudio(post));
  }, [post]);
  //

  const handleClickNewAudio = () =>
    dispatch(
      changeCurrentMediaRunning({
        postData: post,
        state: 'loading'
      })
    );

  const handleClickNewAudioWhenMediaRunning = () => {
    if (post.audioUrl === currentMediaRunning.postData?.audioUrl) {
      return dispatch(
        changeCurrentMediaRunning({
          postData: post,
          state: 'playing'
        })
      );
    }
    return dispatch(
      changeCurrentMediaRunning({
        postData: post,
        state: 'loading'
      })
    );
  };

  const handleClickButton = () => {
    // IF NOT EXIST MEDIA
    if (!currentMediaRunning.postData || !currentMediaRunning.state) return handleClickNewAudio();

    // IF MEDIA RUNNING AND CLICK OTHER POST
    if (currentMediaRunning.postData.id !== post.id) return handleClickNewAudioWhenMediaRunning();

    if (currentMediaRunning.state === 'playing') return dispatch(changeStateMediaRunning('paused'));

    if (currentMediaRunning.state === 'loading') return;

    return dispatch(changeStateMediaRunning('playing'));
  };

  const _renderDefaultBtn = () => {
    if (renderDefaultBtn) return renderDefaultBtn();

    return (
      <PostTypeFeaturedIcon
        className='z-20 hover:scale-105 transform cursor-pointer transition-transform nc-will-change-transform'
        postType='audio'
      />
    );
  };

  const _renderLoadingBtn = () => {
    // RENDER DEFAULT IF IT NOT CURRENT
    if (currentMediaRunning.postData?.id !== post.id) return _renderDefaultBtn();

    // RENDER WHEN IS CURRENT
    if (renderLoadingBtn) return renderLoadingBtn();

    return <LoadingVideo />;
  };

  const _renderPlayingBtn = () => {
    // RENDER DEFAULT IF IT NOT CURRENT
    if (currentMediaRunning.postData?.id !== post.id) return _renderDefaultBtn();

    // RENDER WHEN IS CURRENT
    if (renderPlayingBtn) return renderPlayingBtn();

    return (
      <span className='z-10 bg-neutral-900 bg-opacity-60 rounded-full flex  items-center justify-center text-xl text-white border border-white w-11 h-11 cursor-pointer'>
        <img className='w-5' src={iconPlaying} alt='paused' />
      </span>
    );
  };

  return (
    <div
      className={`nc-ButtonPlayMusicRunningContainer ${className}`}
      data-nc-id='ButtonPlayMusicRunningContainer'
      onClick={handleClickButton}>
      {renderChildren ? (
        renderChildren(currentMediaRunning.postData?.id === post.id, mediaState)
      ) : (
        <>
          {(!mediaState || mediaState === 'paused' || mediaState === 'ended') && _renderDefaultBtn()}

          {/* LOADDING ICON */}
          {mediaState === 'loading' && _renderLoadingBtn()}

          {/* PLAYING ICON */}
          {mediaState === 'playing' && _renderPlayingBtn()}
        </>
      )}
    </div>
  );
};

export default ButtonPlayMusicRunningContainer;
