import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"

export default function GlobalPrice(){
    const {globalPrice} = useContext(AppContext)
    
    if(globalPrice > 0){
        return(
        <h1>{globalPrice}</h1>
        )
    }
    return(
        <h1>Carrinho Vazio</h1>
    )
}