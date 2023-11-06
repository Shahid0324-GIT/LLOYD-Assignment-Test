import {AiFillPlusCircle, AiFillMinusCircle} from 'react-icons/ai'
import {BsChevronRight} from 'react-icons/bs'

import ProductCard from '../ProductCard'

import './index.css'

const Products = ({name, products}) => {
  return (
    <>
      <div className="app__product-details-card">
        <h2>
          {name} <BsChevronRight style={{cursor: 'pointer'}} />
        </h2>

        <ul className="app__products-container">
          {products.map(product => {
            const {name, image, id, price, weight} = product
            return (
              <ProductCard
                key={id}
                name={name}
                id={id}
                price={price}
                weight={weight}
                image={image}
              />
              // <li key={product.id} className="app__product-img">
              //   <div>
              //     <img src={product.image} alt={product.name} />
              //   </div>
              //   {show ? (
              //     <button className="btn" onClick={() => showFnMin(product.id)}>
              //       <AiFillMinusCircle />
              //     </button>
              //   ) : (
              //     <button className="btn" onClick={() => showFn(product.id)}>
              //       <AiFillPlusCircle />
              //     </button>
              //   )}
              //   <p>{product.price}</p>
              //   <p>{product.name}</p>
              //   <p>{product.weight}</p>
              // </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Products
