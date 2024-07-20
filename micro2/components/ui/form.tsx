import { Button, Form, FormProps, Input } from "antd";
import { useProduct } from "@/components/hooks";
import { DataForForm } from "@/components/types";
import { DataNotFound } from '@/components';
import { createOrUpdateAction } from "@/components/actions";
import { useRouter } from "next/router";

export default function ReusableForm () {
    const router = useRouter()
    const id = router.query.id as string
    const product = useProduct(id) 
 
    const onFinish: FormProps<DataForForm>['onFinish'] = async (values) => {
        await createOrUpdateAction(values, id)
        router.push("/")
    };

    return (
        <>        
        {product ?
        <Form style={{ maxWidth: 600 }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            initialValues={product}
            autoComplete="on">
            <Form.Item<DataForForm>
                label="name"
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
                >
                <Input />
            </Form.Item>

            <Form.Item<DataForForm>
                label="description"
                name="description"
                rules={[{ required: true, message: 'Please input the description!' }]}
                >
                <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
        </Form>
        : <DataNotFound/>}
        </>
    )
}