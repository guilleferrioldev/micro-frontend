import { Button, Modal, Space, Table } from 'antd';
import { LinkAsButton } from '@/components';
import useProducts from '@/components/hooks/useProductsHook';
import { Data} from "@/components/types";
import { useState } from 'react';

const { Column, ColumnGroup } = Table;

export default function TableOfProducts () {
    const data = useProducts()
    const [isOpen, setIsOPen] = useState<boolean>(false)
    const [toDelete, setToDelete] = useState<string>("")

    return (
        <>
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
                render={(_: any, record: Data) => (
                    <Space size="middle">
                        <LinkAsButton href={`/${record.id}`} color="#1677ff">Edit</LinkAsButton>
                        <Button type="primary" htmlType="button" style={{background: 'red'}} onClick={() => {setIsOPen(!isOpen); setToDelete(record.name)}}>Delete</Button>
                    </Space>
                )}/>
        </Table>
        <Modal title="Are you sure you want to delete this?" 
                open={isOpen} 
                onCancel={() => setIsOPen(!isOpen)}
                onClose={() => setIsOPen(!isOpen)}
                onOk={() => console.log("si")}>
            <p>{toDelete}</p>
        </Modal>
        </>
    )
}