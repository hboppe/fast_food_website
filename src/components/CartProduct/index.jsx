import Li from "./style";

function CartProduct({product:{name, id, img, category}}){
    return (
        <Li>
            <img src={img} alt={name} />
            <div className="productInfoContainer">
                <div>
                    <h3>{name}</h3>
                    <small>{category}</small>
                </div>
                <button className="removeButton">Remover</button>
            </div>
        </Li>
    )
}

export default CartProduct;