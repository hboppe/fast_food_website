import Aside from "./style"

function Cart(){
    return (
        <Aside>
            <h3 className="cartTitle">Carrinho de compras</h3>

            <div className="emptyCartWarning">
                <h3>Sua sacola está vazia</h3>
                <p>Adicione itens</p>
            </div>
        </Aside>
    )
}

export {Cart}