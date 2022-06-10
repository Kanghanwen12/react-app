import React from "react";
import TopHeader from "../../component/sandbox/topHeader";
import SideMenu from "../../component/sandbox/sideMenu";
import { Switch} from "react-router-dom";
// import HomeList from "./home/home";
// import RoleList from "./right-manage/right/list";
// import Not404 from "./404/not";
import { Layout,Spin } from "antd";
import './sandbox.css'
import { connect } from "react-redux";
import NewRouter from './newRouter'

const  { Content } =  Layout;
 const  Sandbox = (props) => {
   console.log(props,'props')
  return (
    <Layout>
      <SideMenu></SideMenu>
      <Layout className="site-layout">
        <TopHeader></TopHeader>
        <Content  className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            overflow: 'auto'
          }}>
        <Switch>
       
        <Spin size="large" spinning={props.isLoading}>
           <NewRouter></NewRouter>
          </Spin>
        </Switch>
      </Content>
      </Layout>
    </Layout>
  );
}
const mapStateToProps = (state) =>{
  console.log(state,' state')
  const {LoadingReducer} = state 
  const {isLoading}= LoadingReducer
  return {
    isLoading,
  }
}

export default connect (mapStateToProps)(Sandbox)
