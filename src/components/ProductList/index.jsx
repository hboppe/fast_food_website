import Product from "../Product"
import List from "./style"


function ProductList({products, setCart, cart}){

    console.log(products)
    return (
        <List>
            {products.map(product => <Product key={product.id} product={product} setCart={setCart} products={products} cart={cart}/>)}
        </List>
    )
}

export default ProductList