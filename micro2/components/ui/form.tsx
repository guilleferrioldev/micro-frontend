import { Button, Form, FormProps, Input, Empty } from "antd";
import { useProduct } from "@/components/hooks";
import { ProductForForm } from "@/components/types";
import { createOrUpdateAction } from "@/components/actions";
import router, { useRouter } from "next/router";

const withProductAndID = <Props extends object>(Component: React.ComponentType<Props & { product: ProductForForm, id: string }>) => {
    return function EnhancedComponent(props: Props) {
      const router = useRouter();
      const id = router.query.id as string;
      const product = useProduct(id);
  
      return product ? <Component {...props} product={product} id={id}/> : <Empty/>;
    };
  };

function ReusableForm ({ product, id }: {product: ProductForForm, id: string}) { 
    const onFinish: FormProps<ProductForForm>['onFinish'] = async (values) => {
        await createOrUpdateAction(values, id)
        router.push("/")
    };

    return (
        <Form style={{ maxWidth: 600 }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            initialValues={product}
            autoComplete="off">
            <Form.Item<ProductForForm>
                label="name"
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
                >
                <Input />
            </Form.Item>

            <Form.Item<ProductForForm>
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

export default withProductAndID(ReusableForm);