import { Button, Space, Table } from 'antd';
import Link from 'next/link';

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
            id: '7',
            name: 'Joe',
            description: 'Black',
            createdAt: new Date().toString(),
            updatedAt: new Date().toString()
          },
          {
              id: '8',
              name: 'John',
              description: 'Brown',
              createdAt: new Date().toString(),
              updatedAt: new Date().toString()
            },
            {
              id: '9',
              name: 'Jim',
              description: 'Green',
              createdAt: new Date().toString(),
              updatedAt: new Date().toString()
            },
            {
              id: '10',
              name: 'Joe',
              description: 'Black',
              createdAt: new Date().toString(),
              updatedAt: new Date().toString()
            },
  ];

const linkStyle = {
  textDecoration: 'none',
  color: '#fff',
  boxShadow: '0 2px 0 rgba(5, 145, 255, 0.1)',
  fontSize: '14px',
  height: '32px',
  padding: '4px 15px',
  borderRadius: '6px',
  outline: 'none',
  position: 'relative',
  display: 'inline-flex',
  gap: '8px',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '400',
  textAlign: 'center',
  border: '1px solid transparent',
  cursor: 'pointer',
  transition: 'all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)'
} as React.CSSProperties


export default function TableOfProducts ({style}: {style?: React.CSSProperties}) {
    return (
        <Table dataSource={data} style={style}>
            <ColumnGroup title="Info">
                <Column title="Name" dataIndex="name" key="name" />
                <Column title="Description" dataIndex="description" key="description" />
            </ColumnGroup>
            <ColumnGroup title="Date">
              <Column title="Created At" dataIndex="createdAt" key="createdAt" />
              <Column title="Updated At" dataIndex="updatedAt" key="updatedAt" />
            </ColumnGroup>
            <Column title="Action" key="action" 
                render={(_: any, record: DataType) => (
                    <Space size="middle">
                        <Link style={{...linkStyle, background: '#1677ff'}} href={`/${record.id}`}>Edit</Link>
                        <Link style={{...linkStyle, background: 'red'}} href={`/delete/${record.id}`}>Delete</Link>
                    </Space>
                )}/>
        </Table>
    )
}