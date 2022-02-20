import ItemDeLista from "./ItemDeLista"

const ListaDeProdutos = ({produtos, adicionarItemAoCarrinho}) => (
    <div style={{display: 'flex', width: '100%'}}>
        {produtos.map(produto => (
            <ItemDeLista key={produto.id} produto={produto} adicionarItemAoCarrinho={adicionarItemAoCarrinho} />
        ))}
    </div>
)

export default ListaDeProdutos