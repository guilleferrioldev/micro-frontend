import { Empty } from 'antd';

export default function DataNotFound () {
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
            <Empty/>
        </div>
    )
}