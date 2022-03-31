import './App.css';
import { useState, useEffect } from 'react'

import { getProducts } from './api/products'

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    async function fetchData() {
      setProducts(await getProducts())
    }
    fetchData()
  }, [])
  const renderProducts = () => {
    return products.map((product) => {
      return (
        <div key={product._id} className="list-group-item">
          <div className='row'>
            <div className='col-3'></div>
            <div className='col-9'>
              <div className='display-5'>{product.name}</div>
              <div className='display-6'>&#8377;{product.price}</div>
              <div>{product.description}</div>
              <button className='btn btn-primary'>buy</button>
              <br />
              {product.comments ? product.comments.map((comment, idx) => {
                return (
                  <div key={idx} className='alert alert-danger'>
                    <span className='display-6'>{comment.stars}</span>&mdash;
                    <span className='display-6'>{comment.user.name}</span>
                    <hr />
                    <div className='display-6'>{comment.body}</div>
                  </div>
                )
              }) : null}
            </div>
          </div>
        </div>
      )
    })
  }
  return (
    <div className="container">
      <hr />
      <div className="display-1">shop-IT</div>
      <hr />
      {renderProducts()}
    </div >
  );
}

export default App;
