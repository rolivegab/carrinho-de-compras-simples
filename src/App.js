import { useState } from "react";
import Carrinho from "./components/Carrinho";
import ListaDeProdutos from "./components/ListaDeProdutos";
import produtos from "./produtos";

function App() {
  const [itemsDoCarrinho, setItemsDoCarrinho] = useState([])

  const adicionarItemAoCarrinho = (item) => {
    setItemsDoCarrinho(p => {
      const indexDoElemento = p.findIndex(i => i.id === item.id)
      if (indexDoElemento === -1) {
        return [
          ...p,
          {...item, quantidade: 1}
        ]
      } else {
        return [
          ...p.slice(0, indexDoElemento),
          {...p[indexDoElemento], quantidade: p[indexDoElemento].quantidade + 1},
          ...p.slice(indexDoElemento + 1)
        ]
      }
    })
  }

  const removerItemDoCarrinho = (item) => {
    setItemsDoCarrinho(p => {
      const indexDoElemento = p.findIndex(i => i.id === item.id)
      return [
        ...p.slice(0, indexDoElemento),
        ...(p[indexDoElemento].quantidade === 1 ? [] : [{...p[indexDoElemento], quantidade: p[indexDoElemento].quantidade - 1}]),
        ...p.slice(indexDoElemento + 1)
      ]
    })
  }

  return (
    <>
      <Carrinho {...{itemsDoCarrinho, removerItemDoCarrinho}} />
      <ListaDeProdutos {...{produtos, adicionarItemAoCarrinho}} />
    </>
  );
}

export default App;
