import { Space, Table } from 'antd';
import { LinkAsButton } from '@/components';
import useProducts from '@/components/hooks/useProductsHook';
import { ResponseData} from "@/components/types";

const { Column, ColumnGroup } = Table;

export default function TableOfProducts () {
    const data = useProducts()

    return (
        <Table dataSource={data} style={{overflow: 'scroll'}}>
            <ColumnGroup title="Info">
                <Column title="Name" dataIndex="name" key="name" />
                <Column title="Description" dataIndex="description" key="description" />
            </ColumnGroup>
            <ColumnGroup title="Date">
              <Column title="Created At" dataIndex="createdAt" key="createdAt" />
              <Column title="Updated At" dataIndex="updatedAt" key="updatedAt" />
            </ColumnGroup>
            <Column title="Action" key="action" 
                render={(_: any, record: ResponseData) => (
                    <Space size="middle">
                        <LinkAsButton href={`/${record.id}`} color="#1677ff">Edit</LinkAsButton>
                        <LinkAsButton href={`/delete/${record.id}`} color="red">Delete</LinkAsButton>
                    </Space>
                )}/>
        </Table>
    )
}