import CartProduct from "../CartProduct"
import Aside from "./style"

function Cart({cart, setCart}){

    console.log(cart)

    return (
        <Aside>
            <h3 className="cartTitle">Carrinho de compras</h3>

            {cart.length === 0 ? 
            (<div className="emptyCartWarning">
                <h3>Sua sacola está vazia</h3>
                <p>Adicione itens</p>
            </div>) : 
            
            (<ul className="cartList">{cart.map(product => <CartProduct key={product.id} product={product} setCart={setCart}/>)}</ul>)

            }
        </Aside>
    )
}

export {Cart}

// {cart.map(product => <CartProduct key={product.id} product={product})}