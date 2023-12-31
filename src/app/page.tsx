"use client"

import theme from '@/antd/theme/theme'
import { Button, Card, ConfigProvider } from 'antd'
import { useRouter } from 'next/navigation'
import { useRouter as useRouterQuery } from 'next/router'
import DataTodo from './data'

export default function Home() {
  const router = useRouter()

  return (
    <ConfigProvider theme={theme}>
      <Card
        headStyle={{ backgroundColor: 'greenyellow' }}
        title='TODO LIST'
        bodyStyle={{ padding: 0 }}
        extra={<Button type='primary' onClick={() => router.push('add')}>Tambah</Button>}
      >
        <DataTodo />
      </Card>
    </ConfigProvider>
  )
}
