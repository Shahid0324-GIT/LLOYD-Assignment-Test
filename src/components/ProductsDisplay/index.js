import {useContext} from 'react'
import AppContext from '../../context'

import Products from '../Products'

const ProductsDisplay = () => {
  const {fetchedProducts} = useContext(AppContext)

  return (
    <>
      <div className="app__products-display">
        {fetchedProducts.map(item => {
          const {name, products} = item
          return <Products products={products} name={name} />
        })}
      </div>
    </>
  )
}

export default ProductsDisplay
