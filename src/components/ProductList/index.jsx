import Product from "../Product"
import List from "./style"


function ProductList({products}){

    console.log(products)
    return (
        <List>
            {products.map(product => <Product key={product.id} product={product}/>)}
        </List>
    )
}

export default ProductList