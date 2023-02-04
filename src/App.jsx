import axios from 'axios';
import { useState, useEffect } from 'react'
import { Cart } from './components/Cart';
import Header from './components/Header'
import ProductList from './components/ProductList'
import Main from './styles/style';
import {toast, ToastContainer} from 'react-toastify'



function App() {
  const localStorageCart = localStorage.getItem('@BurguerKenzie:cart');
  const [products, setProducts] = useState();
  const [cart, setCart] = useState(JSON.parse(localStorageCart) || []);
  const [input, setInput] = useState('')

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

  useEffect(() => {
    localStorage.setItem('@BurguerKenzie:cart', JSON.stringify(cart))

  },[cart])

  return (
    <div className="App">
      
      <Header input={input} setInput={setInput}/>

      <Main>
      
        {products !== undefined && <ProductList input={input} products={products} setCart={setCart} cart={cart} />}
        <Cart cart={cart} setCart={setCart} />
      </Main>
      
    </div>
  )
}

export default App
