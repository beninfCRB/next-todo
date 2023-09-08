import React from 'react'
import { List } from 'antd'
import { fetchTodoData } from './type'
import Link from 'next/link'

const getData = async () => {
    const get = await fetch('http://localhost:3000/api', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-cache'
    })

    if (!get.ok) {
        throw new Error('Failed to fetch data')
    }

    return await get.json()
}

const DataTodo = async () => {
    const customer: fetchTodoData = await getData()

    return (
        <List
            size="small"
            bordered
            dataSource={customer.data}
            renderItem={(item) =>
                <List.Item key={item.id}>
                    <List.Item.Meta
                        title={<Link href={`/${item.id as string}`} >{item.title}</Link>}
                        description={`Description: ${item.description}`}
                    />
                </List.Item>
            }
        />
    )
}

export default DataTodo