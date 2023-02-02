import axios from 'axios';
import { useState, useEffect } from 'react'
import { Cart } from './components/Cart';
import Header from './components/Header'
import ProductList from './components/ProductList'
import Main from './styles/style';



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
    }
      
    })()
  }, [])

  return (
    <div className="App">
      <Header/>

      <Main>
        {products !== undefined && <ProductList products={products} setCart={setCart} cart={cart}/>}
        <Cart cart={cart} setCart={setCart}/>
      </Main>
    </div>
  )
}

export default App
