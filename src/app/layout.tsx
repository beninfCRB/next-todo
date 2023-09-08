"use client"

import { Breadcrumb, ConfigProvider, Layout, Menu, MenuProps } from 'antd'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '@/antd/lib/AntdRegistry'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const { Header, Content, Footer } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],) {
  return {
    key,
    icon,
    children,
    label,
  };
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body className={inter.className}>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#00b96b',
                borderRadius: 2,

                colorBgContainer: '#f6ffed',
              },
            }}
          >
            <Layout className="layout" style={{ height: '100vh', overflow: 'auto' }}>
              <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className="demo-logo" />
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={['todo']}
                  items={[
                    getItem('Todo', 'todo', '')
                  ]}
                />
              </Header>
              <Content style={{ padding: '0 50px' }}>
                <div style={{ padding: 24 }}>
                  {children}
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
          </ConfigProvider>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
