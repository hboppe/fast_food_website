import Li from "./style";

function CartProduct({product:{name, id, img, category}, setCart}){

    function handleClick(){
       
        setCart((oldValues) => [...oldValues.filter((product) => product.id !== id)])
        console.log(id)
    }

    return (
        <Li>
            <img src={img} alt={name} />
            <div className="productInfoContainer">
                <div>
                    <h3>{name}</h3>
                    <small>{category}</small>
                </div>
                <button className="removeButton" onClick={handleClick}>Remover</button>
            </div>
        </Li>
    )
}

export default CartProduct;