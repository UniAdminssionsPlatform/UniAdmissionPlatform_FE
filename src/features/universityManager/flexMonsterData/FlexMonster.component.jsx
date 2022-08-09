import React from 'react';
import * as FlexmonsterReact from 'react-flexmonster';
import { Button, Col, Layout, Row, Select } from 'antd';
import TitlePageComponent from '../../../components/decorator/TitlePage.component';
import { HeartTwoTone } from '@ant-design/icons';

const FlexMonsterComponent = (props) => {
  const { onReportComplete, onChange, listEvent, handleSelectEvent, requestData, isLoading } = props;
  const { Option } = Select;
  return (
    <Layout>
      <TitlePageComponent title={'Dữ liệu học sinh'} subTitle={'Nơi xử lý dữ liệu'} />
      <Row gutter={[16, 16]}>
        <Col className='gutter-row' span={6}>
          <Select
            showSearch
            placeholder='Chọn sự kiện thống kê'
            optionFilterProp='children'
            onChange={onChange}
            style={{ width: '20vw' }}>
            {listEvent?.list.map((item) => (
              <Option value={item.event.id}>
                <HeartTwoTone twoToneColor='#eb2f96' /> {item.event.name}
              </Option>
            ))}
          </Select>
        </Col>
        <Col className='gutter-row' span={6}>
          <Button type={'primary'} onClick={() => handleSelectEvent()} size={'middle'}>
            Thống kê
          </Button>
        </Col>

        <Col className='gutter-row' span={24}>
          {isLoading ? null : (
            <FlexmonsterReact.Pivot
              toolbar={true}
              componentFolder='https://cdn.flexmonster.com/'
              width='100%'
              report={requestData}
              reportcomplete={onReportComplete}
              licenseKey={'Z75X-XBG62E-565Z5T-5G6Q48'}
            />
          )}
        </Col>
      </Row>
    </Layout>
  );
};
export default FlexMonsterComponent;
