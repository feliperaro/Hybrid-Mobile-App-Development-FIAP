import React from 'react'
import { 
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  FlatList,
  Image
} from 'react-native'
import hoteis from './assets/json/hoteis.json'
import Descricao from './componentes/Descricao'

const PAGE_HOTEIS = 0
const PAGE_DESCRICAO_HOTEL = 1

class App extends React.Component {

  state = {
    paginaAtual : PAGE_HOTEIS,
    hotelAtual : null
  }

  paginaHoteis = () => this.setState({ paginaAtual : PAGE_HOTEIS })

  render () {

    const estiloMenu = styles.buttonTextMenu
    const estiloMenuAtivo = [styles.buttonTextMenu, styles.buttonTextMenuAtivo]

    return (
      <SafeAreaView>
        <StatusBar 
          backgroundColor = "#108FA0" 
          barStyle = "dark-content" 
          hidden = {false} 
          translucent = {true}/>
 
        {/* TITLE */}
        <View style={ styles.menu }>
          <TouchableOpacity
            onPress={ this.paginaHoteis }>
            <Text style={ this.state.paginaAtual == PAGE_HOTEIS ? estiloMenuAtivo : estiloMenu }>
              Traveller Hotéis
            </Text>
          </TouchableOpacity>
        </View>

        {/* HOTÉIS */}
        { this.state.paginaAtual === PAGE_HOTEIS && (
          <View style={ styles.page }>
            <FlatList 
              contentContainerStyle={{ paddingBottom: 20 }}
              data={ hoteis }
              keyExtractor={ (item) => item.id.toString() }
              numColumns={1}
              renderItem={ ({item}) => (
                <TouchableOpacity 
                  onPress={ () => {
                    this.setState({
                      paginaAtual : PAGE_DESCRICAO_HOTEL,
                      hotelAtual : item
                    })
                  } }
                  style={ styles.hotel }>


                  <Image
                    source={{ uri : item.imagem }}
                    style={ styles.hotelImagem }/>

                  <View>
                    <Text style={ styles.hotelNome }>
                      { item.nome }
                    </Text>
                
                    <Text style={ styles.hotelNome }>
                      Valor: { item.valor }
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        )}

        {/* HOTEL */}
        { this.state.paginaAtual === PAGE_DESCRICAO_HOTEL && (
          <Descricao 
            hotel={ this.state.hotelAtual }
            onPressFechar={ this.paginaHoteis }/>
        ) }
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create ({
  buttonTextMenu : {
    borderRadius : 5,
    fontSize : 18,
    marginTop : 20,
    padding : 8
  },
  buttonTextMenuAtivo : {
    backgroundColor : '#00BCD4'
  }, 
  menu : {
    backgroundColor : '#00BCD4',
    flexDirection : 'row',
    padding : 8,
    justifyContent : 'center'
  },
  page : {
    padding : 16
  },
  hotel : {
    borderBottomColor : '#CCC',
    borderBottomWidth : 3,
    flexDirection : 'row',
    padding : 15
  },  
  hotelImagem : {
    height : 80,
    marginRight : 8,
    width : 100
  },  
  hotelNome : {
    fontSize : 16,
    fontWeight : 'bold'
  }
})

export default App