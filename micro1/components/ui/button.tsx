import { Button } from 'antd';
import router from "next/router"

export default function NewButton () {
    return <Button onClick={() => router.push("/nuevo")} type="primary">Insert New Product</Button>
}