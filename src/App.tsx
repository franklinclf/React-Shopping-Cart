import './App.css'
import { AppContext } from './contexts/AppContext'
import { items } from './assets/Items'
import { useState } from 'react'
import GlobalCount from './components/GlobalCount'
import GlobalPrice from './components/GlobalPrice'
import Item from './components/Item'
import Title from './components/Title'
import Frete from './components/Frete'
import Soma from './components/Soma'

function App() {
  const [globalCount, setGlobalCount] = useState(3)
  const [globalPrice, setGlobalPrice] = useState(15520)
  const [globalFrete, setGlobalFrete] = useState(0)
  const [itemArray, setItemArray] = useState(items)

  return (
    <div className="App">
      <AppContext.Provider value={{ globalCount, setGlobalCount, globalPrice, setGlobalPrice, globalFrete, setGlobalFrete, itemArray, setItemArray }}>
        <div className='container'>
          <Title title='Carrinho de Compras' desc='Essa é a lista dos itens adicionados ao carrinho:' />
          <div className='container-carrinho'>
            <div className='container-items'>
              <GlobalCount />
              <div className='item-list'>
                {itemArray.map((i) => {
                  return (
                    <div key={i.name} className='individual-item'>
                      <Item name={i.name} desc={i.desc} image={i.image} price={i.price} itemName={i.name}/>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className='container-info'>
              <div className='sub-container-info'>
                <h1>Resumo</h1>
                <hr></hr>
                <Frete/>
                <Soma/>
              </div>
            </div>
          </div>
        </div>
      </AppContext.Provider>
    </div>
  )
}

export default App
