import CartProduct from "../CartProduct"
import CartTotal from "../CartTotal"
import Aside from "./style"

function Cart({cart, setCart}){

    return (
        <Aside>
            <h3 className="cartTitle">Carrinho de compras</h3>

            {cart.length === 0 ? 
            (<div className="emptyCartWarning">
                <h3>Sua sacola está vazia</h3>
                <p>Adicione itens</p>
            </div>) : 
            
            (<>
                <ul className="cartList">{cart.map(product => <CartProduct key={product.id} product={product} setCart={setCart} cart={cart}/>)}</ul>
            
                <CartTotal cart={cart} setCart={setCart}/>
            </>)

            }
        </Aside>
    )
}

export {Cart}