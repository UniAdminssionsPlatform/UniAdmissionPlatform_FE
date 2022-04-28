import { RadioGroup } from '@headlessui/react';
import ButtonPrimary from '../../field/ButtonPrimary/ButtonPrimary.component';
import ButtonSecondary from '../../field/ButtonSecondary/ButtonSecondary.component';
import NcModal from '../NcModal/NcModal.component';
import React, { useEffect, useRef, useState } from 'react';
import Textarea from '../Textarea/Textarea';
import twFocusClass from '../../../utils/twFocusClass';

const problemPlansDemo = [
  { name: 'Violence', id: 'Violence', label: 'Violence' },
  { name: 'Trouble', id: 'Trouble', label: 'Trouble' },
  { name: 'Spam', id: 'Spam', label: 'Spam' },
  { name: 'Other', id: 'Other', label: 'Other' }
];

const ModalReportItem = ({ problemPlans = problemPlansDemo, id, show, onCloseModalReportItem }) => {
  const textareaRef = useRef(null);

  const [problemSelected, setProblemSelected] = useState(problemPlans[0]);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        const element = textareaRef.current;
        if (element) element.focus();
      }, 400);
    }
  }, [show]);

  const handleClickSubmitForm = () => {
    console.log({
      id,
      problem: problemSelected,
      message: textareaRef.value
    });
  };

  const renderCheckIcon = () => (
    <svg className='w-6 h-6' viewBox='0 0 24 24' fill='none'>
      <circle cx={12} cy={12} r={12} fill='#fff' opacity='0.2' />
      <path d='M7 13l3 3 7-7' stroke='#fff' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );

  const renderContent = () => (
    <form action='#'>
      {/* RADIO PROBLEM PLANS */}
      <RadioGroup value={problemSelected} onChange={setProblemSelected}>
        <RadioGroup.Label className='sr-only'>Problem Plans</RadioGroup.Label>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-2'>
          {problemPlans.map((plan) => (
            <RadioGroup.Option
              key={plan.name}
              value={plan}
              className={({ checked }) =>
                `${
                  checked ? 'bg-primary-6000 text-white dark:bg-primary-700' : 'bg-white border-t border-neutral-50 '
                } relative shadow-lg rounded-lg px-3 py-3 cursor-pointer flex sm:px-5 sm:py-4 focus:outline-none ${twFocusClass(
                  true
                )}`
              }>
              {({ checked }) => (
                <div className='flex items-center justify-between w-full'>
                  <div className='flex items-center'>
                    <div className='text-sm'>
                      <RadioGroup.Label
                        as='p'
                        className={`font-medium line-clamp-1 ${checked ? 'text-white' : 'text-neutral-900'}`}>
                        {plan.label}
                      </RadioGroup.Label>
                    </div>
                  </div>
                  {checked && <div className='flex-shrink-0 text-white'>{renderCheckIcon()}</div>}
                </div>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>

      {/* TEXAREA MESSAGER */}
      <div className='mt-4'>
        <h4 className='text-lg font-semibold text-neutral-700 dark:text-neutral-200'>Message</h4>
        <span className='text-sm text-neutral-6000 dark:text-neutral-400'>
          Please provide any additional information or context that will help us understand and handle the situation.
        </span>
        <Textarea placeholder='...' className='mt-3' ref={textareaRef} required={true} rows={4} id='report-message' />
      </div>
      <div className='mt-4 space-x-3'>
        <ButtonPrimary onClick={handleClickSubmitForm} type='submit'>
          Submit
        </ButtonPrimary>
        <ButtonSecondary type='button' onClick={onCloseModalReportItem}>
          Cancel
        </ButtonSecondary>
      </div>
    </form>
  );

  const renderTrigger = () => null;

  return (
    <NcModal
      isOpenProp={show}
      onCloseModal={onCloseModalReportItem}
      contentExtraClass='max-w-screen-md'
      renderContent={renderContent}
      renderTrigger={renderTrigger}
      modalTitle='Report Abuse'
    />
  );
};

export default ModalReportItem;
