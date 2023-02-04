import Li from "./style";

function CartProduct({product, setCart, cart}){

    function removeProduct(){

        setCart((oldValues) => [...oldValues.filter((item) => item.id !== product.id)])
    }

    function decreaseProductQuantity(){

        if(product.quantity === 1) {

            setCart([...cart.filter(item => item.id !== product.id)])
        } else {
            const updatedItemQuantityList = cart.map(item => {
                if(item.id === product.id) {
                    item.quantity--
                }
    
                return item
            })

            setCart(updatedItemQuantityList)
        }
        
    }

    function increaseProductQuantity(){
        const updatedItemQuantityList = cart.map(item => {
            if(item.id === product.id) {
                item.quantity++
            }

            return item;
        })

        setCart(updatedItemQuantityList)
    }

    return (
        <Li>
            <img src={product.img} alt={product.name} />
            <div className="productInfoContainer">
                <div className="nameAndCategoryContainer">
                    <h3>{product.name}</h3>
                    <small>{product.category}</small>
                </div>
                <div className="quantityAndRemoveContainer">
                    <div className="productQuantityContainer">
                        <button onClick={decreaseProductQuantity}>-</button>
                        <span>{product.quantity}</span>
                        <button onClick={increaseProductQuantity}>+</button>
                    </div>
                    <button className="removeButton" onClick={() => removeProduct()}>Remover</button>

                </div>
                
            </div>
        </Li>
    )
}

export default CartProduct;