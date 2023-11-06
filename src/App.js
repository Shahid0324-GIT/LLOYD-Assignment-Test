/* 
IMPORTANT:

I have only worked on the desktop site and could not design the mobile site.
I have implemented the required logic but could not complete the mobile view.

*/

import {useContext, useState} from 'react'
import AppContext from './context'

import {useRef} from 'react'
import {Scrollspy} from '@makotot/ghostui'

import './App.css'
import Header from './components/Header'
import SidePanel from './components/Menu'
import ProductsDisplay from './components/ProductsDisplay'

const App = () => {
  const context = useContext(AppContext)
  const [cart, setCart] = useState(0)
  const [fetchedProducts, setFetchedProducts] = useState([])
  const [cartProducts, setCardProducts] = useState([])
  const [sec, currSec] = useState("Women's clothing")
  console.log(sec)
  // console.log(fetchedProducts)

  const onAdd = id => {
    console.log(id)
    setCardProducts(prev => [...prev, id])
    setCart(prev => (prev += 1))
  }

  const onRemove = id => {
    const li = cartProducts.filter(cid => cid !== id)
    setCardProducts(li)
    setCart(prev => (prev -= 1))
  }

  return (
    <AppContext.Provider
      value={{
        cart,
        setFetchedProducts,
        fetchedProducts,
        cartProducts,
        onAdd,
        onRemove,
        currSec,
      }}
    >
      <Header />
      <div className="app__main">
        <SidePanel />
        <ProductsDisplay />
      </div>
    </AppContext.Provider>
  )
}

export default App
