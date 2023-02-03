import Total from "./style";
import { useState, useEffect } from "react";

function CartTotal({cart, setCart}) {
    const [totalCart, setTotalCart] = useState(0);

    function makeNewItem(quantity, price){
        return {
            quantity,
            price
        }
    }

    useEffect(()=> {
        const totalArray = cart.map(item => makeNewItem(item.quantity, item.price)).map(item => item.quantity * item.price);

        setTotalCart(totalArray.reduce((acc, item) => acc + item, 0));
        
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