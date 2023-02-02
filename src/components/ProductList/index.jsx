import Product from "../Product"
import List from "./style"


function ProductList({products, setCart, cart}){

    return (
        <List>
            {products.map(product => <Product key={product.id} product={product} setCart={setCart} products={products}/>)}
        </List>
    )
}

export default ProductList