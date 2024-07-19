import { useRouter } from "next/router"

export default function DeletePage () {
    const router = useRouter()

    return (
        <main>
             <h1>Hello From Remote {router.query.id}</h1>
        </main>
       
    )
}