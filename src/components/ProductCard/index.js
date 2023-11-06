import './index.css'

import {useContext, useState} from 'react'
import AppContext from '../../context'

import {AiFillPlusCircle, AiFillMinusCircle} from 'react-icons/ai'

const ProductCard = ({name, weight, id, price, image}) => {
  const {cartProducts, onAdd, onRemove} = useContext(AppContext)
  // const [show, setShow] = useState(false)
  // const show = false

  const find = cartProducts.find(item => item === id)
  console.log(find)

  const show = find ? true : false

  return (
    <li className="app__product-img">
      <div>
        <img src={image} alt={name} />
      </div>
      {show && (
        <button className="btn" onClick={() => onRemove(id)}>
          <AiFillMinusCircle />
        </button>
      )}
      {!show && (
        <button className="btn" onClick={() => onAdd(id)}>
          <AiFillPlusCircle />
        </button>
      )}
      <p>{price}</p>
      <p>{name}</p>
      <p>{weight}</p>
    </li>
  )
}

export default ProductCard
