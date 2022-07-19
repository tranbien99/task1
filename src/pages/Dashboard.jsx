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
                pagination={{
                    onChange: page => {
                      console.log(page);
                    },
                    pageSize: 7
                  }}
                dataSource={data}
                renderItem={(item) => (
                    <List.Item
                        actions={[<a key="list-loadmore-edit" href="_blank">edit</a>, <a key="list-loadmore-more" href="_blank">more</a>]}>
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