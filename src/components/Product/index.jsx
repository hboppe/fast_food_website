import Button from "../Button";
import {Li, ImageContainer} from "./style";


function Product({product:{name, img, category, price}}){
    console.log(img)
    return (
        <Li>
            
            <ImageContainer img={img}/>
           
            <div className="productInfo">
                <h3>{name}</h3>
                <small>{category}</small>
                <p>R$ {price.toFixed(2)}</p>
                <Button>Adicionar</Button>
            </div>

        </Li>
    )
}

export default Product;