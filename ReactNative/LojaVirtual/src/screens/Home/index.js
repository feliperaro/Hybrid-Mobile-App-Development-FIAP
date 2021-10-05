import React, {
  useContext,
  useEffect,
  useState
} from "react";

import {
  FlatList,
  Text,
  View
} from 'react-native'

import { Button } from "react-native-elements";

import ListItemProduto from '../../components/ListItemProduto'

import produtos from '../../data/produtos.json'

import CarrinhoContext from "../../contexts/CarrinhoContext";
import {valorEmRealFormatado} from '../../utils'

const Home = (props) => {

  const { carrinho } = useContext(CarrinhoContext)
  const [totalCarrinho, setTotalCarrinho] = useState(0)

  useEffect(() => {
    let total = 0

    carrinho.forEach((produto) => {
      total += parseInt(produto.quantidade) * parseFloat(produto.valor)
    });

    setTotalCarrinho(total)
  }, [carrinho])

  const vizualizarCarrinho = () => {
    props.navigation.navigate('carrinho')
  }

  return (
    <View style={{ paddingBottom: 50 }}>
      <Button
        buttonStyle={{
          backgroundColor: '#050'
        }}
        icon={{
          color: '#FFF',
          name: 'shopping-cart',
          type: 'font-awesome-5'
        }}
        onPress={() => vizualizarCarrinho()}
        title={`Visualizar carrinho (${valorEmRealFormatado(totalCarrinho)})`}
      />

      <FlatList
        data={produtos}
        keyExtractor={(produto) => produto.id}
        renderItem={({ item }) => (
          <ListItemProduto
            produto={item}
          />
        )}
      />
    </View>
  )
}

export default Home