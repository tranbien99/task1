import React from 'react'
import {Link} from 'react-router-dom'
import { LogoutOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const Navbar = () => {

    return (
        <>
            <Menu mode="horizontal" defaultSelectedKeys={['home']} theme='dark'>
                <Menu.Item key="home">
                    Dashboard
                </Menu.Item>
                <Menu.Item key="logout" icon={<LogoutOutlined />}>
                    <Link to='/task1'>
                        Logout        
                    </Link>
                </Menu.Item>
            </Menu>
        </>
    )
}

export default Navbar