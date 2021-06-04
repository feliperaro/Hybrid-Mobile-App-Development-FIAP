import React from 'react'
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native'

import produtos from './assets/json/produtos.json'

import Contato from './componentes/pages/Contato'
import Descricao from './componentes/pages/Descricao'

const PAGE_NOVIDADES = 0
const PAGE_CONTATO = 1
const PAGE_DESCRICAO_PRODUTO = 2

class App extends React.Component {

  state = {
    paginaAtual : PAGE_NOVIDADES,
    produtoAtual : null
  }

  paginaNovidades = () => this.setState({ paginaAtual : PAGE_NOVIDADES })

  paginaContato = () => this.setState({ paginaAtual : PAGE_CONTATO })

  render() {

    const estiloMenu = estilos.buttonTextMenu
    const estiloMenuAtivo = [estilos.buttonTextMenu, estilos.buttonTextMenuAtivo]

    return (
      <SafeAreaView>
        <StatusBar backgroundColor='#489800' />

        {/* MENU */}
        <View style={ estilos.menu }>
          <TouchableOpacity
            onPress={ this.paginaNovidades }>
            <Text style={ this.state.paginaAtual == PAGE_NOVIDADES ? estiloMenuAtivo : estiloMenu }>
              Novidades
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={ this.paginaContato }>
            <Text style={ this.state.paginaAtual == PAGE_CONTATO ? estiloMenuAtivo : estiloMenu }>
              Contato
            </Text>
          </TouchableOpacity>
        </View>

        {/* NOVIDADES */}
        { this.state.paginaAtual === PAGE_NOVIDADES && (
          <View style={ estilos.page }>
            <FlatList
              data={ produtos }
              keyExtractor={ (item) => item.id.toString() }
              renderItem={ ({item}) => (
                <TouchableOpacity
                  onPress={ () => {
                    this.setState({
                      paginaAtual : PAGE_DESCRICAO_PRODUTO,
                      produtoAtual : item
                    })
                  } }
                  style={ estilos.produto }>
                  
                  <Image
                    source={{ uri : item.imagem }}
                    style={ estilos.produtoImagem }/>

                  <View>
                    <Text style={ estilos.produtoNome }>
                      { item.nome }
                    </Text>

                    <Text>
                      Valor: { item.valor }
                    </Text>
                  </View>
                </TouchableOpacity>
              ) } />
          </View>
        ) }

        { this.state.paginaAtual === PAGE_DESCRICAO_PRODUTO && (
          <Descricao 
            produto={ this.state.produtoAtual }
            onPressFechar={ this.paginaNovidades }/>
        ) }

        {/* CONTATO */}
        { this.state.paginaAtual === PAGE_CONTATO && (
          <Contato />
        ) }  

      </SafeAreaView>
    )
  }
}

const estilos = StyleSheet.create({
  buttonTextMenu : {
    borderRadius : 5,
    fontSize : 18,
    padding : 8
  },
  buttonTextMenuAtivo : {
    backgroundColor : '#a0c87b'
  }, 
  indisponivel : {
    fontSize : 18,
    fontWeight : 'bold',
    padding : 32,
    textAlign : 'center'
  },
  menu : {
    backgroundColor : '#c7e2ae',
    flexDirection : 'row',
    padding : 8,
    justifyContent : 'center'
  },
  page : {
    padding : 16
  },
  produto : {
    borderBottomColor : '#CCC',
    borderBottomWidth : 1,
    flexDirection : 'row',
    padding : 16
  },  
  produtoImagem : {
    height : 80,
    marginRight : 8,
    width : 100
  },  
  produtoNome : {
    fontSize : 16,
    fontWeight : 'bold'
  }
})

export default App;
