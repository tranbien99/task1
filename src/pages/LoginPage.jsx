import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Typography, Image, notification } from 'antd';


const LoginPage = (listSV) => {
  const { Title } = Typography;
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  let navigate = useNavigate();

  const Login = () => {
    const list = listSV.listSV

    for (let i = 0; i < list.length; i++) {
      if (username === list[i].MSSV && password === list[i].password) {
        successNotification()
        return navigate('/dashboard')
      }     
    }
    errorNotification()
  }

  const errorNotification = () => {
    notification.open({
      message: 'Wrong Username or Password',
      description:
        'Type again!',
      onClick: () => {
        console.log('Wrong user/password');
      },
      type: 'error'
    });
  }

  const successNotification = () => {
    notification.open({
      message: 'Success Login',
      type:'success'
    });
  }

  return (
    <div className='form-wrapper'>
      <Title className='form-title'>Học viện kỹ thuật mật mã</Title>
      <div className='image'>
        <Image
          width={100}
          src="https://cdn.haitrieu.com/wp-content/uploads/2021/10/Logo-Hoc-Vien-Ky-Thuat-Mat-Ma-ACTVN.png"
          className='image'
        />
      </div>

      <Title level={2} className='form-title'>Đăng nhập</Title>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
        className='form-login'
      >
        <Form.Item
          label="MSSV"
          name="mssv"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
          className='form-login__username'
        >
          <Input placeholder='Nhập mã số sinh viên' onChange={(e) => { setUsername(e.target.value) }} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          className='form-login__pass'
        >
          <Input.Password placeholder='Nhập mật khẩu' onChange={(e) => { setPassword(e.target.value) }} />
        </Form.Item>

        <Form.Item
          name="login"
          wrapperCol={{
            offset: 2,
            span: 16,
          }}
          className='form-login__submit'
        >
          <Button type="primary" htmlType="submit" onClick={Login}>
            Đăng nhập
          </Button>
        </Form.Item>

      </Form>
    </div>
  )
}

export default LoginPage