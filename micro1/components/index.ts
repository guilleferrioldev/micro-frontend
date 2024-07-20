import Header from '@/components/ui/header'
import WrapperForm from './ui/wrapperForm'
import dynamic from 'next/dynamic'

const RemoteForm = dynamic(() => import("remote/form"), {
    ssr: false,
    suspense: true
 })

 const RemoteTable = dynamic(() => import("remote/table"), {
    ssr: false,
    suspense: true
  })

export {
    Header,
    WrapperForm,
    RemoteForm,
    RemoteTable
}