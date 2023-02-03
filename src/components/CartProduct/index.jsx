import { useEffect, useState } from "react";
import Li from "./style";

function CartProduct({product, setCart, cart}){

    const [quantity, setQuantity] = useState(product.quantity)

    function handleClick(id){

        // const productQuantity = cart.filter(product => product.id === id);

        // useEffect(() => {

        // },[cart])

        setCart((oldValues) => [...oldValues.filter((product) => product.id !== id)])
    }

    return (
        <Li>
            <img src={product.img} alt={product.name} />
            <div className="productInfoContainer">
                <div>
                    <h3>{product.name}</h3>
                    <small>{product.category}</small>
                </div>
                <div className="productQuantityContainer">
                    <button>-</button>
                    <span>{product.quantity}</span>
                    <button>+</button>
                </div>
                <button className="removeButton" onClick={() => handleClick(product.id)}>Remover</button>
            </div>
        </Li>
    )
}

export default CartProduct;