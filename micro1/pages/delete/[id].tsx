import dynamic from "next/dynamic"

const PageComponent = dynamic(() => import("remote/pages/delete/[id]"), {
    ssr: false,
    suspense: true
 })

export default function Page() {
    return (
        <PageComponent></PageComponent>
    )
}