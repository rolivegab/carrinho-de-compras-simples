import numberToReal from "../utils/numberToReal"

const ItemDeLista = ({produto, adicionarItemAoCarrinho}) => (
    <div style={{border: '1px solid black', padding: '10px', flexBasis: '50%'}}>
        <img src={produto.image} alt={produto.description} width="200" />
        <h2>{produto.name}</h2>
        <h1>{numberToReal(produto.price)}</h1>
        <button onClick={() => adicionarItemAoCarrinho(produto)}>Adicionar ao carrinho</button>
    </div>
)

export default ItemDeLista