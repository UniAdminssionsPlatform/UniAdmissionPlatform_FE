import { Input } from 'antd';
import ButtonPrimary from '../../field/ButtonPrimary/ButtonPrimary.component';
import ButtonSecondary from '../../field/ButtonSecondary/ButtonSecondary.component';
import React from 'react';

const { TextArea } = Input;

const SingleCommentForm = ({
  className = 'mt-5',
  commentId,
  onClickSubmit,
  onClickCancel,
  defaultValue = '',
  textareaRef,
  rows = 4
}) => (
  <form action='#' className={`nc-SingleCommentForm ${className}`}>
    <TextArea
      placeholder='Add to discussion'
      ref={textareaRef}
      required={true}
      defaultValue={defaultValue}
      rows={rows}
    />
    <div className='mt-2 space-x-3'>
      <ButtonPrimary onClick={() => onClickSubmit(commentId)} type='submit'>
        Submit
      </ButtonPrimary>
      <ButtonSecondary type='button' onClick={() => onClickCancel(commentId)}>
        Cancel
      </ButtonSecondary>
    </div>
  </form>
);

export default SingleCommentForm;
