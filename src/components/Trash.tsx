import { useContext, Dispatch } from "react"
import { AppContext } from "../contexts/AppContext"

type TrashProps = {
    itemName: string
    itemCount: number
    itemPrice: number
    setItemCount: Dispatch<React.SetStateAction<number>>
}

export default function Trash({itemName, itemCount, itemPrice, setItemCount}: TrashProps){
    const {itemArray, setItemArray, globalCount, globalPrice, setGlobalCount, setGlobalPrice} = useContext(AppContext)

    function clickHandler(){
        setGlobalPrice(globalPrice - (itemPrice * itemCount))
        setGlobalCount(globalCount - itemCount)
        setItemCount(1)
        setItemArray(itemArray.filter(a => a.name !== itemName))
    }

    return(
        <>
            <button onClick={() => clickHandler()}>✖</button>
        </>
    )
}