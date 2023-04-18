import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"

export default function GlobalCount(){
    const {globalCount} = useContext(AppContext)

    if(globalCount === 0){
        return(
            <p>Você não tem nada no carrinho.</p>
        )
    }
    else if(globalCount === 1){
        return(
            <p>Você tem <strong>{globalCount}</strong> item no carrinho.</p>
        )
    }
    
    return(
        <>
            <p>Você tem <strong>{globalCount}</strong> item(s) no carrinho.</p>
        </>
    )
}