import React from 'react'
import 'antd/dist/antd.css';
import './Login.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function Login() {
  
  const onFinish = (values) => {
    console.log('Success:', values);
    alert('Login Successfully')
  };

  const navigate = useNavigate();

  const navigateToDataTable = () => {
    navigate('/DataTable/DataTable')
  }

  return (
    <div>
        <Navbar />

        <div style={{display: "flex", justifyContent: "center"}}>
            <h1>Med-Api</h1><br />
        </div>

        <Form
        name="normal_login"
        onFinish={onFinish}
        className="login-form"
        initialValues={{
            remember: true,
        }}
        >
        <Form.Item
            name="email"
            rules={[
            {
                required: true,
                message: 'Please input your Email!'
            },
            {
                pattern:  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/,
                message: 'Your Email is invalid!'
            },
            ]}
            hasFeedback
        >
            <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
            name="password"
            rules={[
            {
                required: true,
                message: 'Please input your Password!',
            },
            { min: 8 },
            ]}>
            <Input
            type="password"
            placeholder="Password"
            />
        </Form.Item>

        <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="forgot.html">
            Forgot password
            </a>
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" onClick={navigateToDataTable}>
            Log in
            </Button>
        </Form.Item>
        </Form>
        <Footer />
    </div>

  );
};
export default Login;