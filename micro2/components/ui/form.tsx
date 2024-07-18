import { Button, Form, FormProps, Input } from "antd";
import { useRouter } from "next/router";

type FieldType = {
    name?: string;
    description?: string;
};

export default function FormReusable ({style, id}: {style?: React.CSSProperties, id?: string}) {
    const router = useRouter()

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', {values, id: id});
        router.push("/")
    };

    return (
        <Form style={style}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            initialValues={{ remember: false }}
            autoComplete="off">
            <Form.Item<FieldType>
                label="name"
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
                >
                <Input />
            </Form.Item>

            <Form.Item<FieldType>
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
    )
}