import React from 'react';
import * as FlexmonsterReact from 'react-flexmonster';
const SingleFlexMonsterComponent = (props) => {
  const { requestData, isReload } = props;
  console.log(isReload);
  const ref = React.useRef();
  const onReportComplete = () => {
    console.log('>>>>', ref.current.flexmonster.getReport());
  };
  return (
    <>
      {!isReload ? (
        <FlexmonsterReact.Pivot
          toolbar={true}
          componentFolder='https://cdn.flexmonster.com/'
          width='100%'
          report={requestData}
          reportcomplete={onReportComplete}
          licenseKey={'Z75X-XBG62E-565Z5T-5G6Q48'}
        />
      ) : null}
    </>
  );
};
export default SingleFlexMonsterComponent;
