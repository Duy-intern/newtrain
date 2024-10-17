"use client"
import React from 'react';
import { Breadcrumb, Image, Layout, Menu, theme } from 'antd';

import LoginButton from './components/loginbutton';
import RegisterButton from './components/registerbutton';



const { Header, Content, Footer } = Layout;

const items = new Array(5).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
        <LoginButton/>
        <RegisterButton/>     
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{ 
            background: colorBgContainer,
          
            padding: 30,
            borderRadius: borderRadiusLG,
          }}
        >
           <Image 
           alt="example"
           src="https://images7.alphacoders.com/362/thumb-1920-362619.jpg"
           style={{ width: '100%', height: 'auto', objectFit: 'contain' }}/>
           
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default App;