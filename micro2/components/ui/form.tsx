import { Button, Form, FormProps, Input } from "antd";
import useProduct from "@/components/hooks/useProductHook";
import { DataForForm } from "@/components/types";

export default function ReusableForm ({style, id, executableFunction}: {style?: React.CSSProperties, id: string, executableFunction: Function}) {
    let product: DataForForm | undefined
    if (id === "new") {
        product = {name : "", description: ""}
    } else {
        product = useProduct(id) 
    }

    const onFinish: FormProps<DataForForm>['onFinish'] = (values) => {
        executableFunction()
    };

    return (
        <>        
        {product && 
        <Form style={style}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            initialValues={{ remember: true }}
            autoComplete="on">
            <Form.Item<DataForForm>
                label="name"
                name="name"
                initialValue={product.name}
                rules={[{ required: true, message: 'Please input your name!' }]}
                >
                <Input />
            </Form.Item>

            <Form.Item<DataForForm>
                label="description"
                name="description"
                initialValue={product.description}
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
        }
        </>
    )
}