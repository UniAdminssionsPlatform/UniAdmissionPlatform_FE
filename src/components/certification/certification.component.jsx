import React from 'react';
import NcImage from '../commons/NcImage/NcImage.component';
import { Helmet } from 'react-helmet';
import Pagination from '../commons/Pagination/Pagination';
import { Input, Button, Form, Image, Space, Modal, Select } from 'antd';
import LayoutPage from '../commons/LayoutPage/LayoutPageWithout.component';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { description, imgUrl, name, score } from '../../validate/Addcertification.validate';

const CertificationComponent = (props) => {
  const {
    certificates,
    certificatedetail,
    certificateadmin,
    onFinish,
    handleonclick,
    handlecreate,
    handleChange,
    showModal,
    handleOk,
    handleCancel,
    isModalVisible,
    handledelete,
    handleconfirmdelete,
    form
  } = props;
  const { Option } = Select;

  // console.log('ceradmin: ', certificateadmin);

  const style1 = {
    paddingTop: '10px'
  };
  const style2 = {
    paddingBottom: '20px',
    paddingTop: '10px'
  };
  const style3 = {
    paddingLeft: '20px'
  };

  const field = [
    {
      name: ['imageUrl'],
      value: certificatedetail?.imageUrl
    },
    {
      name: ['description'],
      value: certificatedetail?.description
    },
    {
      name: ['name'],
      value: certificatedetail?.name
    },
    {
      name: ['score'],
      value: certificatedetail?.score
    }
  ];

  // const [certificateId, setCertificateId] = useState();
  // console.log('certificateId: ', certificateId);
  // console.log('certificate component: ', certificates);

  return (
    <div className={`nc-PageLogin `} data-nc-id='ScorePage'>
      <Helmet>
        <title>Chứng Chỉ</title>
      </Helmet>
      <LayoutPage subHeading='' headingEmoji='🔑' heading=''>
        <div className='flex flex-col space-y-8 xl:space-y-0 xl:flex-row'>
          <div className='flex flex-col space-y-8'>
            <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
              <div className='py-2 align-middle inline-block min-w-full px-1 sm:px-6 lg:px-8'>
                <div className='shadow dark:border dark:border-neutral-800 overflow-hidden sm:rounded-lg'>
                  <table className='min-w-full divide-y divide-neutral-200 dark:divide-neutral-800'>
                    <thead className='bg-neutral-50 dark:bg-neutral-800'>
                      <tr className='text-left text-xs font-medium text-neutral-500 dark:text-neutral-300 uppercase tracking-wider'>
                        {/* <th scope='col' className='px-6 py-3'>
                          STT
                        </th> */}
                        <th scope='col' className='px-6 py-3'>
                          Hình
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          Mô Tả
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          Tên
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          Điểm
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          Thao tác
                        </th>
                      </tr>
                    </thead>
                    <tbody className='bg-white dark:bg-neutral-900 divide-y divide-neutral-200 dark:divide-neutral-800'>
                      {certificates?.map((item) => (
                        <tr key={item.id}>
                          {/* <td className='px-6 py-4'>
                            <span>{item.certificationId}</span>
                          </td> */}
                          <td className='px-6 py-4 whitespace-nowrap'>
                            <td className='px-6 py-4'>
                              <div className='flex items-center w-96 lg:w-auto max-w-md overflow-hidden'>
                                <NcImage
                                  containerClassName='flex-shrink-0 h-12 w-12 rounded-lg overflow-hidden lg:h-10 lg:w-10'
                                  src={item.imageUrl}
                                />
                              </div>
                            </td>
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400'>
                            <span> {item.description}</span>
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400'>
                            <span> {item.name}</span>
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400'>
                            <span> {item.score}</span>
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400'>
                            <EditOutlined
                              onClick={() => {
                                handleonclick(item.certificationId);
                              }}
                            />
                            <DeleteOutlined
                              style={style3}
                              onClick={() => {
                                // console.log('đụ mẹ mày');
                                handleconfirmdelete(item.certificationId);
                                // handledelete(item.certificationId);
                              }}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div style={style1}>
                  <Button type='primary' onClick={showModal} style={{ backgroundColor: 'green' }}>
                    Tạo một chứng chỉ mới
                  </Button>
                  <Modal
                    okButtonProps={{ form: 'add-certificate-form', key: 'submit', htmlType: 'submit' }}
                    title='Thêm một chứng chỉ mới'
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    okText='Thêm'
                    cancelText='Đóng'>
                    <Form
                      form={form}
                      initialValues={{
                        remember: false
                      }}
                      onFinish={handlecreate}
                      id='add-certificate-form'
                      name='basic'
                      // onFinish={onFinish}
                      // onFinishFailed={onFinishFailed}
                      autoComplete='off'
                      layout='vertical'>
                      <label>Loại chứng chỉ</label> <br />
                      <div style={style2}>
                        <Select
                          defaultValue={1}
                          style={{
                            width: 250
                          }}
                          onChange={handleChange}>
                          {certificateadmin?.map((item) => (
                            <Option value={item.id}>{item.name}</Option>
                          ))}
                          {/* <Option value='jack'>Jack</Option> */}
                        </Select>
                      </div>
                      <Form.Item label='Link hình ảnh' name='imageUrl' rules={imgUrl}>
                        <Input />
                      </Form.Item>
                      <Form.Item label='Mô tả' name='description' rules={description}>
                        <Input />
                      </Form.Item>
                      <Form.Item label='Tên' name='name' rules={name}>
                        <Input />
                      </Form.Item>
                      <Form.Item label='Điểm' name='score' rules={score}>
                        <Input type='number' />
                      </Form.Item>
                    </Form>
                  </Modal>
                </div>
              </div>
            </div>
            <Pagination />
          </div>

          <div className='flex-shrink-0 max-w-xl xl:w-80 xl:pr-8' style={{ width: '100%' }}>
            <div className='grid place-items-center'>
              {certificatedetail === '' ? (
                <Image
                  style={{ verticalAlign: 'middle' }}
                  width={300}
                  height={300}
                  src='err'
                  fallback='data:image/png;base64,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'
                />
              ) : (
                <Image style={{ verticalAlign: 'middle' }} width={300} height={300} src={certificatedetail.imageUrl} />
              )}
              {/* <Image
                style={{ verticalAlign: 'middle' }}
                width={300}
                height={300}
                src='err'
                fallback='data:image/png;base64,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'
              /> */}
            </div>
            <div style={{ marginTop: '2rem' }}>
              <Space direction='horizontal' style={{ width: '100%', justifyContent: 'center' }}>
                <Form
                  name='basic'
                  initialValues={{
                    remember: true
                  }}
                  // onFinish={onFinish}
                  // onFinishFailed={onFinishFailed}
                  autoComplete='off'
                  layout='vertical'
                  fields={field}
                  onFinish={onFinish}>
                  <Form.Item label='Link ảnh' name='imageUrl'>
                    <Input />
                  </Form.Item>
                  <Form.Item label='Mô Tả' name='description'>
                    <Input />
                  </Form.Item>
                  <Form.Item label='Tên' name='name'>
                    <Input />
                  </Form.Item>
                  <Form.Item label='Điểm' name='score'>
                    <Input />
                  </Form.Item>

                  <Form.Item
                    wrapperCol={{
                      offset: 7,
                      span: 16
                    }}>
                    <Button type='primary' htmlType='submit'>
                      Chỉnh sửa
                    </Button>
                  </Form.Item>
                </Form>
              </Space>
            </div>
          </div>
        </div>
      </LayoutPage>
    </div>
  );
};

export default CertificationComponent;
