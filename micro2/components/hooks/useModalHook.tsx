import { useState } from "react"
import { Product } from "@/components/types"

export default function useModal () {
    const [isOpen, setIsOPen] = useState<boolean>(false)
    const [toDelete, setToDelete] = useState<Product>() 

    const changeOpenCloseState = () => {
        setIsOPen(!isOpen)
    } 

    const setProductToDelete = (product: Product) => {
        setToDelete(product)
    }

    return {isOpen, toDelete, changeOpenCloseState, setProductToDelete}
}