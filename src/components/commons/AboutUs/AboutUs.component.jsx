import './AboutUs.module.css';
import { Card, Layout } from 'antd';
import React from 'react';

const { Content, Footer } = Layout;

const { Meta } = Card;

const AboutUsComponent = () => (
  <div>
    <h1 style={{ textAlign: 'center' }}>About Us</h1>
    <div
      style={{
        textAlign: 'center',
        marginLeft: 100,
        marginRight: 100,
        fontSize: 20,
        padding: 20
      }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore inventore possimus vitae, eveniet debitis ipsam
      vel? Doloremque assumenda atque consectetur. Delectus assumenda adipisci fugit nostrum inventore. Perspiciatis
      explicabo nihil animi!
    </div>
    <Layout>
      <Content
        className='site-layout'
        style={{
          padding: '0 50px',
          marginTop: 50,
          alignItems: 'center',
          marginBottom: 50
        }}>
        <div
          style={{
            textAlign: 'center',
            display: 'grid',
            height: 'auto',
            gridTemplateColumns: 'repeat(3, 1fr)',
            alignItems: 'center'
          }}>
          <Card
            hoverable
            style={{
              width: 350,
              margin: 50,
              border: '5px solid orange',
              borderRadius: 15,
              height: 500
            }}
            cover={
              <img
                alt='example'
                src='https://haycafe.vn/wp-content/uploads/2022/02/Anh-Avatar-Doremon-dep-ngau-cute.jpg'
                style={{ borderRadius: 10, objectFit: 'cover', padding: 1 }}
              />
            }>
            <Meta title='Nguyễn Đình Hào' description='Backend Developer - Team Leader' />
          </Card>
          <Card
            hoverable
            style={{
              width: 350,
              margin: 50,
              border: '5px solid orange',
              borderRadius: 15,
              height: 500
            }}
            cover={
              <img
                alt='example'
                src='https://haycafe.vn/wp-content/uploads/2022/02/Anh-Avatar-Doremon-dep-ngau-cute.jpg'
                style={{ borderRadius: 10, objectFit: 'cover', padding: 1 }}
              />
            }>
            <Meta title='Nguyễn Văn Bắc' description='Backend Developer' />
          </Card>
          <Card
            hoverable
            style={{
              width: 350,
              margin: 50,
              border: '5px solid orange',
              borderRadius: 15,
              height: 500
            }}
            cover={
              <img
                alt='example'
                src='https://haycafe.vn/wp-content/uploads/2022/02/Anh-Avatar-Doremon-dep-ngau-cute.jpg'
                style={{ borderRadius: 10, objectFit: 'cover', padding: 1 }}
              />
            }>
            <Meta title='Huỳnh Châu Bảo' description='Frontend developer' />
          </Card>
          <Card
            hoverable
            style={{
              width: 350,
              margin: 50,
              border: '5px solid orange',
              borderRadius: 15,
              height: 500
            }}
            cover={
              <img
                alt='example'
                src='https://haycafe.vn/wp-content/uploads/2022/02/Anh-Avatar-Doremon-dep-ngau-cute.jpg'
                style={{ borderRadius: 10, objectFit: 'cover', padding: 1 }}
              />
            }>
            <Meta title='Nguyễn Thành Tín' description='Frontend developer' />
          </Card>
          <Card
            hoverable
            style={{
              width: 350,
              margin: 50,
              border: '5px solid orange',
              borderRadius: 15,
              height: 500
            }}
            cover={
              <img
                alt='example'
                src='https://haycafe.vn/wp-content/uploads/2022/02/Anh-Avatar-Doremon-dep-ngau-cute.jpg'
                style={{ borderRadius: 10, objectFit: 'cover', padding: 1 }}
              />
            }>
            <Meta title='Nhâm Đức Đạt' description='Frontend developer' />
          </Card>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center', backgroundColor: 'white' }}>Copyright ©2022 Created by Ant UED</Footer>
    </Layout>
  </div>
);
export default AboutUsComponent;
