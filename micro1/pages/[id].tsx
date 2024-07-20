import { RemoteForm, WrapperForm } from '@/components'
import { useRouter } from 'next/router'

export default function IdPage() {
  const router = useRouter()

  return (
      <WrapperForm text={router.query.id === 'new' ? 'New Product' : 'Update Product'}>
          <RemoteForm/>
      </WrapperForm>
  )
}