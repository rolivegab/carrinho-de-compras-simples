const Carrinho = ({itemsDoCarrinho, removerItemDoCarrinho}) => {
    const renderItemsDoCarrinho = () => itemsDoCarrinho.map(item => (
        <div key={item.id} style={{border: '1px solid black', padding: 10}}>
            <div>{item.name}</div>
            <div>{item.quantidade}</div>
            <div><button onClick={() => removerItemDoCarrinho(item)}>Remover</button></div>
        </div>
    ))

    return (
        <div style={{display: 'flex', border: '1px solid black', marginBottom: 10, padding: 10}}>
            {itemsDoCarrinho.length > 0 ? renderItemsDoCarrinho() : <h2>Não há items no carrinho</h2>}
        </div>
    )
}

export default Carrinho