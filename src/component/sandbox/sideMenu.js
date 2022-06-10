import React, {useState, useEffect} from 'react'
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import axios from 'axios' 
import  './index.css'
const { Sider } = Layout;

// const SideMenuData = [
//   {
//     key: "../home",
//     icon: <VideoCameraOutlined />,
//     label: "首页",
//   },
//   {
//     key: "../userList/userList",
//     icon: <UploadOutlined />,
//     label: "首页2",
//   },
//   {
//     key: "../home/dedde",
//     icon: <UserOutlined />,
//     label: "子集",
//     children: [
//       {
//         key: "../hom111",
//         icon: <UserOutlined />,
//         label: "首页子集",
//       },
//     ],
//   },
// ];

 const SideMenu = (props) => {
  const [dataMenu, setDataMenu] = useState([])
  useEffect(() => {
    axios.get('/rights?_embed=children').then(res=>{
      console.log(res.data)
      setDataMenu(res.data)
    })
  }, [])
  const iconList= {
    '/home': <UserOutlined />,
    '/right-manage': <VideoCameraOutlined />,
    '/right-manage/role/list': <VideoCameraOutlined />,
    '/user-manage': <VideoCameraOutlined />,
  }
  // 权限管理
  const pagepermisson = (item)=>{
    return item.pagepermisson === 1;
  }
  // 侧边栏导航数据
  const items2 = (list) =>{
    return list.map((item, index) => {
      if (pagepermisson(item)) {
        return {
          key: item.key,
          icon: iconList[item.key],
          label: item.title,
          children:
            item.children?.length > 0 &&
            items2(item.children),
        };
      }
    });
};
const onClick = (e) =>{
  props.history.push(e.key)
  
}
const onOpenChange = (e) =>{
  console.log(e,'onOpenChange')
  console.log(props,'props')
}
const keys = props.location.pathname
const onpenKeys = ['/'+ props.location.pathname.split('/')[1]]
  return (
      <Sider trigger={null} collapsible collapsed={props.isCollapsed}>
        <div
          style={{ display: "flex", height: "100%", flexDirection: "column" }}
        >
          <div className="logo" style={{ white: "white" }}>
            后台管理系统
          </div>
          <div style={{ flex: 1, overflow: "auto" }}>
            <Menu
              theme="dark"
              mode="inline"
              onClick={onClick}
              onOpenChange={onOpenChange}
              selectedKeys={keys}
              defaultOpenKeys={onpenKeys}
              items={items2(dataMenu)}
            />
          </div>
        </div>
      </Sider>
  );
}
const mapStateToProps = (state) =>{
  const {collapsedReducer} = state 
  const {isCollapsed}= collapsedReducer
  return {
    isCollapsed,
  }
}
export default connect(mapStateToProps)(withRouter(SideMenu))
