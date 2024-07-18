import { Button } from 'antd';
import { useRouter } from 'next/router';

export default function NewButton () {
    const router = useRouter()

    const handleClick = () => {
        router.push("/nuevo")
    }

    return <Button onClick={handleClick} type="primary">Insert New Product</Button>
}