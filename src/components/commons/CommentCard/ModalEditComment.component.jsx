import NcModal from '../NcModal/NcModal.component';
import React, { useEffect, useRef } from 'react';
import SingleCommentForm from '../../../components/commons/SingleCommentForm/SingleCommentForm.component';

const ModalEditComment = ({ comment, show, onCloseModalEditComment }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        const element = textareaRef.current;
        if (element) {
          element.focus();
          element.setSelectionRange(element.value.length, element.value.length);
        }
      }, 400);
    }
  }, [show]);

  const renderContent = () => (
    <SingleCommentForm
      className='mt-0'
      onClickCancel={onCloseModalEditComment}
      onClickSubmit={() => console.log(textareaRef.value)}
      defaultValue={comment.content}
      textareaRef={textareaRef}
      rows={8}
      children={comment.content}
    />
  );

  const renderTrigger = () => null;

  return (
    <NcModal
      isOpenProp={show}
      onCloseModal={onCloseModalEditComment}
      contentExtraClass='max-w-screen-md'
      renderContent={renderContent}
      renderTrigger={renderTrigger}
      modalTitle='Editing comment'
    />
  );
};

export default ModalEditComment;
