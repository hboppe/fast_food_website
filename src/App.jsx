import axios from 'axios';
import { useState, useEffect } from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'



function App() {
  const [products, setProducts] = useState();
  const [cart, setCart] = useState([]);

  useEffect( () => {
    
  (async function() {
    try{
      const productsRequest =  await axios.get('https://hamburgueria-kenzie-json-serve.herokuapp.com/products');

      setProducts(productsRequest.data)

    } catch(error){
      console.log(error)
    } finally {
      console.log(products)

    }
      
    })()
  }, [])

  return (
    <div className="App">
      <Header/>
      {products !== undefined && <ProductList products={products} setCart={setCart} cart={cart}/>}
    </div>
  )
}

export default App
