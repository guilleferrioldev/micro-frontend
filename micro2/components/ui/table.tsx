import { Button, Space, Table } from 'antd';
import router from 'next/router';

const { Column, ColumnGroup } = Table;

interface DataType {
    id: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
  }
  
const data: DataType[] = [
    {
      id: '1',
      name: 'John',
      description: 'Brown',
      createdAt: new Date().toString(),
      updatedAt: new Date().toString()
    },
    {
      id: '2',
      name: 'Jim',
      description: 'Green',
      createdAt: new Date().toString(),
      updatedAt: new Date().toString()
    },
    {
      id: '3',
      name: 'Joe',
      description: 'Black',
      createdAt: new Date().toString(),
      updatedAt: new Date().toString()
    },
    {
        id: '4',
        name: 'John',
        description: 'Brown',
        createdAt: new Date().toString(),
        updatedAt: new Date().toString()
      },
      {
        id: '5',
        name: 'Jim',
        description: 'Green',
        createdAt: new Date().toString(),
        updatedAt: new Date().toString()
      },
      {
        id: '6',
        name: 'Joe',
        description: 'Black',
        createdAt: new Date().toString(),
        updatedAt: new Date().toString()
      },
      {
        id: '3',
        name: 'Joe',
        description: 'Black',
        createdAt: new Date().toString(),
        updatedAt: new Date().toString()
      },
      {
          id: '4',
          name: 'John',
          description: 'Brown',
          createdAt: new Date().toString(),
          updatedAt: new Date().toString()
        },
        {
          id: '5',
          name: 'Jim',
          description: 'Green',
          createdAt: new Date().toString(),
          updatedAt: new Date().toString()
        },
        {
          id: '6',
          name: 'Joe',
          description: 'Black',
          createdAt: new Date().toString(),
          updatedAt: new Date().toString()
        },
        {
            id: '3',
            name: 'Joe',
            description: 'Black',
            createdAt: new Date().toString(),
            updatedAt: new Date().toString()
          },
          {
              id: '4',
              name: 'John',
              description: 'Brown',
              createdAt: new Date().toString(),
              updatedAt: new Date().toString()
            },
            {
              id: '5',
              name: 'Jim',
              description: 'Green',
              createdAt: new Date().toString(),
              updatedAt: new Date().toString()
            },
            {
              id: '6',
              name: 'Joe',
              description: 'Black',
              createdAt: new Date().toString(),
              updatedAt: new Date().toString()
            },
  ];

export default function TableOfProducts ({style}: {style?: React.CSSProperties}) {
    return (
        <Table dataSource={data} style={style} pagination={false}>
            <ColumnGroup title="Info">
                <Column title="Name" dataIndex="name" key="name" />
                <Column title="Description" dataIndex="description" key="description" />
            </ColumnGroup>
            <Column title="Created At" dataIndex="createdAt" key="createdAt" />
            <Column title="Updated At" dataIndex="updatedAt" key="updatedAt" />
            <Column title="Action" key="action" 
                render={(_: any, record: DataType) => (
                    <Space size="middle">
                        <Button type="primary" htmlType="button" onClick={() => router.push(`/${record.id}`)}>Edit</Button>
                        <Button type="primary" htmlType="button" style={{ background: 'red'}} onClick={() => router.push(`/delete/${record.id}`)}>Delete</Button>
                    </Space>
                )}/>
        </Table>
    )
}