"use client"

import { Button, Form, Input, Space, message } from 'antd'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { fetchTodoData, todoType } from '../type'

function ViewTodo({ params }: { params: { id: string } }) {
    const [form] = Form.useForm()
    const router = useRouter()

    useEffect(() => {
        if (params.id) {
            ViewTodo(params.id).then((res: fetchTodoData) => {
                form.setFieldsValue({
                    ...res.data
                })
            })
        }
    }, [params.id])


    const ViewTodo = async (id: string) => {
        const req = await fetch(`http://localhost:3000/api/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })

        return req.json()
    }

    const UpdateTodo = async (props: { id: string, values: todoType }) => {
        const req = await fetch(`http://localhost:3000/api/${props.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(props.values)
        })

        return req.json()
    }

    const onSubmit = () => {
        form.validateFields().then((values) => {
            UpdateTodo({ id: params.id, values }).then((res) => {
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
                <Button type='primary' className='bg-green-500' onClick={onSubmit}>Ubah</Button>
            </Space>
        </Form>
    )
}

export default ViewTodo