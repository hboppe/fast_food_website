import {Li, ImageContainer} from "./style";
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Product({product, setCart, cart}){

    const showToast = () => {
        toast.success('Um novo produto foi adicionado ao seu carrinho', {
            position: "top-right",
            autoClose: 3000
        })
    } 

    
    function addProductToCart(){

        if(cart.some(item => item.id === product.id)){
            
            const newCart = cart.map((item) => {

                if(item.id === product.id){
                    item.quantity = item.quantity + 1;
                } 
                return item;

            })
            
            setCart(newCart)

        } else {
            const newProduct = {...product, quantity: 1}
            setCart((oldValues) => [...oldValues, newProduct])

        }
        showToast()

    }
  
    return (   
        <Li>
            <ToastContainer/>
            <ImageContainer img={product.img}/>
            
            <div className="productInfo">
                <h3>{product.name}</h3>
                <small>{product.category}</small>
                <p>R$ {product.price.toFixed(2)}</p>
                <button onClick={addProductToCart}>Adicionar</button>
            </div>
        
        </Li>
            
    )
}

export default Product;