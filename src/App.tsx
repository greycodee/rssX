import React,{useEffect} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import { Layout, FloatButton } from 'antd';
import { CustomerServiceOutlined, CommentOutlined } from '@ant-design/icons';


const { Content } = Layout;

const App: React.FC = () => {
  const ngv = useNavigate();

  useEffect(()=>{
    ngv("/allposts");
  },[]);

  return (
    <Layout style={{minHeight:'100vh'}}>
      <Content style={{background:'#ff9900'}}>
        <Outlet />
      </Content>
        <FloatButton.Group icon={<CustomerServiceOutlined />} type="primary" trigger="click">
            <FloatButton onClick={()=>{ngv("/setting")}} />
            <FloatButton onClick={()=>{ngv("/allposts")}} icon={<CommentOutlined />} />
        </FloatButton.Group>
    </Layout>
  );
};

export default App;
