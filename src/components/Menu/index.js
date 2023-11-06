import {useEffect, useContext} from 'react'
import AppContext from '../../context'

import './index.css'

const url = 'https://run.mocky.io/v3/12531624-c691-4a5b-9625-4490a7cff00d'

const SidePanel = () => {
  const {setFetchedProducts, fetchedProducts, currSec} = useContext(AppContext)
  // const [fetchedProducts, setFetchedProducts] = useState([])
  // console.log(cart, onAdd, onRemove)
  const getProducts = async () => {
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      const categories = data.categories
      setFetchedProducts(categories)
    }
  }
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className="app__side-panel">
      <ul className="app__side-panel-menu">
        {fetchedProducts.map(item => {
          return (
            <li key={item.name}>
              <button
                className="app__side-panel-btn"
                onClick={() => currSec(item.name)}
              >
                {item.name}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SidePanel
