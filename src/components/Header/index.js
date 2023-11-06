import {useContext} from 'react'
import AppContext from '../../context'

import './index.css'

import {AiOutlineShoppingCart} from 'react-icons/ai'

const Header = () => {
  const {cart} = useContext(AppContext)
  return (
    <header>
      <nav>
        <h1>E-commerce</h1>
        <div className="app__cart-icon">
          <AiOutlineShoppingCart /> {cart}
        </div>
      </nav>
    </header>
  )
}

export default Header
