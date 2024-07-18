import WrapperForm from '@/components/ui/wrapperForm'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

const FormComponent = dynamic(() => import("remote/form"), {
    ssr: false,
    suspense: true
 })

export default function Page() {
  const router = useRouter()
  let id: string;
  if (typeof router.query.id === 'string') {
    id = router.query.id;
  } else if (Array.isArray(router.query.id)) {
    id = router.query.id[0];
  } else {
    id = '';
  }

  return (
    <main style={{ width: '100dvw', height: '100dvh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '10px'}}>
        <WrapperForm id={id}>
            <FormComponent style={{ maxWidth: 600 }} id={id}/>
        </WrapperForm>
    </main>
  )
}