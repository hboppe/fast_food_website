import Total from "./style";
import { useState, useEffect } from "react";

function CartTotal({cart, setCart}) {
    const [totalCart, setTotalCart] = useState(0);

    useEffect(()=> {
        setTotalCart(cart.reduce((acc, item) => acc + item.price, 0))
    },[cart])

    function handleClick(){
        setCart([]);
    }

    return (
        <Total>
            <hr />
            <div className="totalContainer">
                <span>Total</span> <span>R$ {totalCart.toFixed(2)}</span>
            </div>
            <button onClick={handleClick}>Remover todos</button>
            
        </Total>
    )
}

export default CartTotal;