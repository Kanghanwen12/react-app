import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import React from "react";
import './login.css'
import { withRouter } from "react-router-dom";
import {LoginApi} from "../../util/api";


const Login = (props) => {
  const onFinish = (values) => {
    console.log("Received values of form.js: ", values);
    LoginApi({

      username: values.username,
      password: values.password
    }).then(res =>{
      console.log(res.data)
      if(res.data.length === 0) {
        message.error('账号没权限，请重新登录')
      } else {
        localStorage.setItem('tonken', JSON.stringify(res.data[0]))
        props.history.push('/')
      }
    })
    // axios.get(`/users?username=${values.username}&password=${values.password}&roleState=true&_expand=role`).then(res=>{
    //   console.log(res.data)
    //   if(res.data.length === 0) {
    //     message.error('账号没权限，请重新登录')
    //   }else {
    //     localStorage.setItem('tonken', JSON.stringify(res.data[0]))
    //     props.history.push('/')
    //   }
    // })

  };

  return (
    <div className="form">

      <div className="formDiv">
        <div className="title">登录系统</div>
        <Form
          name="normal_login"
          className="login-form"
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "请输入姓名!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="请输入姓名"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "请输入密码！",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="请输入密码！"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登 录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default withRouter(Login);
