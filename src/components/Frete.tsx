import { useState, useContext } from "react"
import { api } from "../services/api"
import { AppContext } from "../contexts/AppContext"
import './styles/Frete.css'

export default function Frete() {

    const [input, setInput] = useState('')
    const [placeholder, setPlaceholder] = useState('Digite um CEP.')
    const [freteData, setFreteData] = useState<any>({})
    const {globalFrete, setGlobalFrete} = useContext(AppContext)
    let gotIT = false
    
    async function handleSubmit(){
        if(input === ''){
            setPlaceholder("Digite um CEP válido.")   
            return;
        }

        try {
            const response = await api.get(`${input}/json`)
            setFreteData(response.data)
        }
        catch {
            setInput("")
            setPlaceholder("CEP inválido.")
            return;
        }

        if(freteData.uf === "RN" || freteData.uf === "CE" || freteData.uf === "PE" || freteData.uf === "MA" || freteData.uf === "SE" || freteData.uf === "PI" || freteData.uf === "PB" || freteData.uf === "BA"){
            setGlobalFrete(0)
            gotIT = true
            return
        }
        else if(freteData.uf == "RR" || freteData.uf === "RO" || freteData.uf === "PA" || freteData.uf === "AC" || freteData.uf === "PA" || freteData.uf === "AP" || freteData.uf === "MT"){
            setGlobalFrete(60)
            gotIT = true
            return
        }
        else{
            setGlobalFrete(35)
            gotIT = true
            return
        }

        
    }

    return (
        <div>
            <h2>Frete</h2>
            <div className="cep-info">
                <input placeholder={placeholder} value={input} name="CEP" id="CEP" pattern="[0-9]{5}[\-]?[0-9]{3}" onChange={e => setInput(e.target.value)} required/> 
                <button onClick={() => handleSubmit()}> ⟳ </button>
                <p><strong>R$ {globalFrete}</strong></p>
            </div>
                <p>{freteData.localidade} {freteData.uf}</p>
            <hr></hr>
        </div>
    )
}