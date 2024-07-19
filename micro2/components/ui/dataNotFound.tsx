import { LinkAsButton } from '@/components';

export default function DataNotFound () {
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px'}}>
            <h3>Data Not Found</h3>
            <LinkAsButton href="/" color="#1677ff">Back to Home</LinkAsButton>
        </div>
    )
}