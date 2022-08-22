import { Link } from 'react-router-dom';
import Avatar from '../Avatar/Avatar.component';
import CommentCardLikeReplyContainer from '../../../commons/CommentCardLikeReplyContainer/CommentCardLikeReplyContainer.container';
import ModalDeleteComment from '../CommentCard/ModalDeleteComment.component';
import ModalEditComment from '../CommentCard/ModalEditComment.component';
import ModalReportItem from '../ModalReportItem/ModalReportItem.component';
import NcDropDown from '../NcDropDown/NcDropDown.component';
import React, { useRef, useState } from 'react';
import SingleCommentForm from '../SingleCommentForm/SingleCommentForm.component';
import moment from 'moment';
import twFocusClass from '../../../utils/twFocusClass';

const CommentCard = ({ comment }) => {
  console.log(comment);
  const size = 'large';
  const actions = [
    { id: 'edit', name: 'Edit', icon: 'las la-edit' },
    { id: 'reply', name: 'Reply', icon: 'las la-reply' },
    { id: 'report', name: 'Report abuse', icon: 'las la-flag' },
    { id: 'delete', name: 'Delete', icon: 'las la-trash-alt' }
  ];

  const textareaRef = useRef(null);
  const [isReplying, setIsReplying] = useState(false);
  const [isEditting, setIsEditting] = useState(false);
  const [isReporting, setIsReporting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const openReplyForm = () => {
    setIsReplying(true);
    setTimeout(() => {
      textareaRef.current && textareaRef.focus();
    }, 100);
  };
  const closeReplyForm = () => {
    setIsReplying(false);
  };

  const openModalEditComment = () => setIsEditting(true);
  const closeModalEditComment = () => setIsEditting(false);

  const openModalReportComment = () => setIsReporting(true);
  const closeModalReportComment = () => setIsReporting(false);

  const openModalDeleteComment = () => setIsDeleting(true);
  const closeModalDeleteComment = () => setIsDeleting(false);

  const hanldeClickDropDown = (item) => {
    if (item.id === 'reply') return openReplyForm();

    if (item.id === 'edit') return openModalEditComment();

    if (item.id === 'report') return openModalReportComment();

    if (item.id === 'delete') return openModalDeleteComment();
  };

  const renderCommentForm = () => (
    <SingleCommentForm
      textareaRef={textareaRef}
      onClickSubmit={(id) => {
        console.log(id);
      }}
      onClickCancel={closeReplyForm}
      className='flex-grow'
      commentId={comment.id}
    />
  );

  return (
    <>
      <div
        className={`nc-CommentCard flex`}
        data-nc-id='CommentCard'
        data-comment-id={comment.id}
        data-comment-parent-id={comment.id}>
        <Avatar
          imgUrl={
            comment.avatarUrl
              ? comment.avatarUrl
              : 'https://firebasestorage.googleapis.com/v0/b/uni-admission-platform.appspot.com/o/image%2F07b3c9ba-6b7c-4736-ab9d-a47bc31ca0888%2F9%2F2022%207%3A27%3A41%20PM.png?alt=media'
          }
          userName={comment.userName}
          sizeClass={`h-6 w-6 text-base ${size === 'large' ? 'sm:text-lg sm:h-8 sm:w-8' : ''}`}
          radius='rounded-full'
          containerClassName='mt-4'
        />
        <div className='flex-grow flex flex-col p-4 ml-2 text-sm border border-neutral-200 rounded-xl sm:ml-3 sm:text-base dark:border-neutral-700'>
          {/* AUTHOR INFOR */}
          <div className='relative flex items-center pr-6'>
            <div className='absolute -right-3 -top-3'>
              <NcDropDown
                className={`p-2 text-neutral-500 flex items-center justify-center rounded-lg hover:text-neutral-800 dark:hover:text-neutral-200 sm:hover:bg-neutral-100 dark:hover:bg-neutral-800 ${twFocusClass()}`}
                data={actions}
                onClick={hanldeClickDropDown}
              />
            </div>
            <Link className='flex-shrink-0 font-semibold text-neutral-800 dark:text-neutral-100' to=''>
              {comment.userName}
            </Link>
            <span className='mx-2'>·</span>
            <span className='text-neutral-500 dark:text-neutral-400 text-xs line-clamp-1 sm:text-sm'>
              {moment(comment.createdDateString).add(7, 'hours').format('LLL')}
            </span>
          </div>
          <span className='block text-neutral-700 mt-2 mb-3 sm:mt-3 sm:mb-4 dark:text-neutral-300'>
            {comment.content}
          </span>
          {isReplying ? (
            renderCommentForm()
          ) : (
            <CommentCardLikeReplyContainer onClickReply={openReplyForm} comment={comment} />
          )}
        </div>
      </div>

      <ModalEditComment show={isEditting} comment={comment} onCloseModalEditComment={closeModalEditComment} />
      <ModalReportItem show={isReporting} id={comment.id} onCloseModalReportItem={closeModalReportComment} />
      <ModalDeleteComment
        show={isDeleting}
        commentId={comment.id}
        onCloseModalDeleteComment={closeModalDeleteComment}
      />
    </>
  );
};

export default CommentCard;
