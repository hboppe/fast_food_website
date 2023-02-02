import {Li, ImageContainer} from "./style";


function Product({product:{name, img, category, price, id}, setCart, products}){

    function handleClick(){
        const selectedProduct = products.find(product => product.id === id);

        setCart((oldValues) => [...oldValues, selectedProduct])
    }
    
    return (
        <Li>
            
            <ImageContainer img={img}/>
           
            <div className="productInfo">
                <h3>{name}</h3>
                <small>{category}</small>
                <p>R$ {price.toFixed(2)}</p>
                <button onClick={handleClick}>Adicionar</button>
            </div>

        </Li>
    )
}

export default Product;