import React, {
  createContext,
  useReducer
} from "react";

const CarrinhoContext = createContext()

const ACTIONS = {
  ADICIONAR: "ADICIONAR",
  ATUALIZAR: "ATUALIZAR",
  LIMPAR: "LIMPAR",
  REMOVER: "REMOVER"
}

const PRODUTO_NAO_ENCONTRADO = -1

/**
 * Verifica se um produto com determinado id já existe no carrinho.
 * Retorna -1 se não encontrar. Retorna a posição do itemm no array caso encontrado.
 * @param {json} state 
 * @param {int} idProduto 
 * @returns {int}
 */
const retornarIndexProdutoExistente = (state, idProduto) => {
  return state.findIndex((produto) => produto.id === idProduto)
}

/**
 * Adiciona um item ao carrinho
 * @param {json} state 
 * @param {json} action 
 * @returns {json}
 */
const adicionar = (state, action) => {
  const index = retornarIndexProdutoExistente(state, action.payload.produto.id)

  if (index === PRODUTO_NAO_ENCONTRADO) {
    state.push({
      ...action.payload.produto,
      quantidade: parseInt(action.payload.quantidade)
    })
  } else {
    const quantidadeAtual = parseInt(state[index].quantidade)
    const novaQuantidade = parseInt(action.payload.quantidade)
    state[index].quantidade = quantidadeAtual + novaQuantidade
  }

  return [...state]
}

/**
 * Atualiza a quantidade de um produto já existente no carrinho.
 * @param {json} state 
 * @param {json} action 
 * @returns {json}
 */
const atualizar = (state, action) => {
  const index = retornarIndexProdutoExistente(state, action.payload.produto.id)

  if (index > PRODUTO_NAO_ENCONTRADO) {
    state[index].quantidade = parseInt(action.payload.quantidade)
  }

  return [...state]
}

/**
 * Remove um item do carrinho
 * @param {json} state 
 * @param {json} action 
 * @returns {json}
 */
const remover = (state, action) => {
  const index = retornarIndexProdutoExistente(state, action.payload.produto.id)

  if (index > PRODUTO_NAO_ENCONTRADO) {
    state.splice(index, 1)
  }

  return [...state]
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADICIONAR:
      return adicionar(state, action)
    case ACTIONS.ATUALIZAR:
      return atualizar(state, action)
    case ACTIONS.LIMPAR:
      return []
    case ACTIONS.REMOVER:
      return remover(state, action)
    default:
      return state
  }
}

const CarrinhoProvider = (props) => {
  const [carrinho, dispatch] = useReducer(reducer, [])

  return (
    <CarrinhoContext.Provider value={{ carrinho, dispatch, ACTIONS }}>
      {props.children}
    </CarrinhoContext.Provider>
  )
}

export default CarrinhoContext
export { CarrinhoProvider }