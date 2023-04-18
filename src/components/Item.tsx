import './styles/Item.css'
import ItemCount from './ItemCount'
type ItemListProps = {
    name: string
    desc: string
    image: string
    price: number
    itemName: string
}

export default function ItemList({name, desc, image, price, itemName}: ItemListProps){
    return(
        <div className='item-container'>
            <div className='image-container'>
                <img src={image}/>
            </div>
            <div className='info-container'>
                <p className='name'>{name}</p>
                <p>{desc}</p>
                <p> R$ {price}</p>
            </div>
            <ItemCount itemPrice={price} itemName={itemName} />
        </div>
    )
}