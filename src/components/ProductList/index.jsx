import { useEffect, useState } from "react"
import Product from "../Product"
import List from "./style"
import { ToastContainer } from "react-toastify";


function ProductList({products, setCart, cart, input}){
    const [list, setList] = useState(products);

    useEffect(() => {
        const filteredProducts = products.filter(product => {
            const productName = product.name.toLowerCase();
            const productCategory = product.category.toLowerCase();

            if(productName.includes(input.toLowerCase())) {
                return product;
            } else if(productCategory.includes(input.toLowerCase())){
                return product
            }
           
        });
        
            
        
        setList([...filteredProducts])
    }, [input])


    return (
        <List>
            
            {list.map(product => <Product key={product.id} product={product} setCart={setCart} cart={cart}/>)} 

            
        </List>
    )
}

export default ProductList