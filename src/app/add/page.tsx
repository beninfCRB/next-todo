"use client"

import { Button, Form, Input, Space, message } from 'antd'
import { useRouter } from 'next/navigation'
import React from 'react'
import { todoType } from '../type'

function AddTodo() {
    const [form] = Form.useForm()
    const router = useRouter()

    const PostTodo = async (values: todoType) => {
        const req = await fetch('http://localhost:3000/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
        })

        return req.json()
    }

    const onSubmit = () => {
        form.validateFields().then((values) => {
            PostTodo(values).then((res) => {
                router.replace('/')
                message.success("Berhasil menambahkan data")
            }).catch((res) => {
                message.error("Gagal menambahkan data")
            })
        })
    }

    const onCancel = () => {
        router.replace('/')
    }

    return (
        <Form
            layout='vertical'
            form={form}
        >
            <Form.Item
                label='Title'
                name={'title'}
                rules={[
                    {
                        required: true,
                        message: 'Masukan title'
                    }
                ]}
            >
                <Input placeholder='Masukan title' />
            </Form.Item>
            <Form.Item
                label='Description'
                name={'description'}
                rules={[
                    {
                        required: true,
                        message: 'Masukan description'
                    }
                ]}
            >
                <Input.TextArea
                    rows={3}
                    placeholder='Masukan description'
                />
            </Form.Item>

            <Space
                className="justify-end w-full">
                <Button type='default' onClick={onCancel}>Batal</Button>
                <Button type='primary' className='bg-green-500' onClick={onSubmit}>Simpan</Button>
            </Space>
        </Form>
    )
}

export default AddTodo