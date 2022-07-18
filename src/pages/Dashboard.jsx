import React from 'react'
import Navbar from '../components/Navbar'
import { Typography, List, Avatar } from 'antd'

const Dashboard = (listSV) => {
    const data = listSV.listSV
    const { Title } = Typography;

    return (
        <div>
            <Navbar />
            <Title level={2} style={{ margin: 20 }}>Danh sách sinh viên</Title>
            <List
                itemLayout="horizontal"
                style={{ margin: 20 }}
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title={<a href="_blank">{item.name}</a>}
                            description={"MSSV: " + item.MSSV + ' - ' + "Lớp: " + item.class}
                        />
                    </List.Item>
                )}
            />
        </div>
    )
}

export default Dashboard