import { RemoteForm, WrapperForm } from '@/components'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query
  return {
    props: {
      id: id
    },
  };
}

export default function IdPage(props: { id: string }) {
  const { id } = props 

  return (
      <WrapperForm text={id === 'new' ? 'New Product' : 'Update Product'}>
          <RemoteForm id={id}/>
      </WrapperForm>
  )
}