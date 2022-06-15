import React from 'react';
import { Layout, Dropdown, Space, Menu, Avatar } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined
} from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';



const { Header } = Layout;

 const TopHeader = (props) => {
  console.log(props)

  const changeColl = () =>{
    console.log(props)
    props.changeColl()
  }
  const handleMenuClick = (e) => {
    console.log(e,props, 'e')
    if(e.key === '2') {
      localStorage.removeItem('tonken')
      props.history.replace('/Login')
    }
  }
  const menu = (
    <Menu
    onClick={handleMenuClick}
      items={[
        {
          key: '1',
          label: '个人中心登录'
        },
        {
          key: '2',
          danger: true,
          label: '退出',
        },
      ]}
    />
  );
  const {role} = JSON.parse(localStorage.getItem('tonken'))
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: "0 24px",
      }}
    >
      {props.isCollapsed ? (
        <MenuUnfoldOutlined onClick={changeColl} />
      ) : (
        <MenuFoldOutlined onClick={changeColl} />
      )}
      <div style={{ float: "right" }}>
        欢迎{role.roleName}回来
        <Dropdown overlay={menu}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
            <Avatar icon={<UserOutlined />} />
            </Space>
          </a>
        </Dropdown>
      </div>
    </Header>
  );
}
//  connect(
//    // mapStateToProps,
//     // maDispatchToProps
//  )
const mapStateToProps = (state) =>{
  const {collapsedReducer} = state
  const {isCollapsed} = collapsedReducer
  return {
    isCollapsed,
  }
}
const mapDispatchToProps = {
  changeColl(){
    return {
      type: 'change_collapsed'
      // payload
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter (TopHeader))

