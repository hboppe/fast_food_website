import { useEffect, useState } from "react"
import Product from "../Product"
import List from "./style"


function ProductList({products, setCart, cart, input}){
    const [list, setList] = useState(products);

    // console.log(products.filter(product => product.name.includes(input)))

    useEffect(() => {
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(input.toLowerCase()));
        
        setList([...filteredProducts])
    }, [input])


    return (
        <List>
            
            {list.map(product => <Product key={product.id} product={product} setCart={setCart} cart={cart}/>)} 

            
        </List>
    )
}

export default ProductList