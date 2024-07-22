import { Button, Modal, Space, Table } from 'antd';
import { LinkAsButton } from '@/components';
import { useProducts, useModal } from '@/components/hooks';
import { Product } from "@/components/types";

const { Column, ColumnGroup } = Table;

export default function TableOfProducts () {
    const {data, deleteProduct} = useProducts()
    const {isOpen, toDelete, changeOpenCloseState, setProductToDelete} = useModal()

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
                render={(_: any, record: Product) => (
                    <Space size="middle">
                        <LinkAsButton href={`/${record.id}`} color="#1677ff">Edit</LinkAsButton>
                        <Button type="primary" htmlType="button" style={{background: 'red'}} 
                                onClick={() => {setProductToDelete(record); changeOpenCloseState()}}>
                            Delete 
                        </Button>
                    </Space>
                )}/>
        </Table>
        <Modal title="Are you sure you want to delete this?" 
                open={isOpen} 
                onCancel={() => changeOpenCloseState()}
                onClose={() => changeOpenCloseState()}
                onOk={async () => {toDelete && await deleteProduct(toDelete.id); changeOpenCloseState()}}>
            <p>{toDelete?.name}</p>
        </Modal>
        </>
    )
}