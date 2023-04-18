import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import './styles/Soma.css'

export default function Soma(){
    const {globalCount, globalPrice, globalFrete} = useContext(AppContext)

    return(
        <div>
            <div className="itemSum">
                <p>Itens ({globalCount})</p>
                <p>R$ {globalPrice}</p>
            </div>

            <div className="frete">
                <p>Frete</p>
                <p>R$ {globalFrete}</p>
            </div>

            <hr></hr>

            <div className="total">
                <p>Total</p>
                {globalPrice > 0 ? <p>R$ {globalPrice + globalFrete}</p> : <p>Carrinho Vazio</p>}
            </div>

            <button className="submitButton" onClick={() => alert("Pedido feito com sucesso!")}>Fechar Pedido</button>
        </div>
    )
}