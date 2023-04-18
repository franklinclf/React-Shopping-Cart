import './styles/ItemCount.css'
import { useContext, useState } from 'react'
import { AppContext } from '../contexts/AppContext'
import Trash from './Trash'

type ItemCountProps = {
    itemPrice: number,
    itemName: string,
}


export default function ItemCount({itemPrice, itemName}: ItemCountProps){
    const [itemCount, setItemCount] = useState(1)
    const {globalCount, setGlobalCount, globalPrice, setGlobalPrice} = useContext(AppContext)
    
    function handleClick(op: string){
        if(op == '-' && itemCount !== 1){
            setItemCount(itemCount - 1)
            setGlobalCount(globalCount - 1)
            setGlobalPrice(globalPrice - itemPrice)
        }
        else if(op == '+'){
            setItemCount(itemCount + 1)
            setGlobalCount(globalCount + 1)
            setGlobalPrice(globalPrice + itemPrice)
        }
    }

    return(
        <div className='count-container'>
            <p>R$</p>
            <p style={{width: '5vh'}}>{itemPrice * itemCount}</p>
            <button onClick={() => handleClick('-')}>-</button>
            <p className='item-count'>{itemCount}</p>
            <button onClick={() => handleClick('+')}>+</button>
            <Trash itemName={itemName} itemCount={itemCount} itemPrice={itemPrice} setItemCount={setItemCount}/>
        </div>
    )
}