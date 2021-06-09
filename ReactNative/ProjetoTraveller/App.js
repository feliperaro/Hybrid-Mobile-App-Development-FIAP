import React from 'react'
import { 
  SafeAreaView,
  StatusBar
} from 'react-native'

import hoteis from './assets/json/hoteis.json'
import Titulo from './componentes/Titulo'
import ListaHoteis from './componentes/ListaHoteis'
import Descricao from './componentes/Descricao'

const PAGE_HOTEIS = 0
const PAGE_DESCRICAO_HOTEL = 1

class App extends React.Component {

  state = {
    tituloApp : 'Traveller Hotéis',
    paginaAtual : PAGE_HOTEIS,
    hotelAtual : null
  }

  paginaHoteis = () => this.setState({ paginaAtual : PAGE_HOTEIS })

  render () {
    return (
      <SafeAreaView>
        <StatusBar 
          backgroundColor = "#108FA0" 
          barStyle = "dark-content" 
          hidden = { false } 
          translucent = { true }/> 
 
        {/* TITULO APP */}
        <Titulo
          onPress={ this.paginaHoteis }
          paginaAtual={ this.state.paginaAtual } 
          text={ this.state.tituloApp }/>

        {/* LISTA DE HOTÉIS */}
        { this.state.paginaAtual === PAGE_HOTEIS && (
          <ListaHoteis
            hoteis={ hoteis }
            onPress={ (item) => {
              this.setState({
                paginaAtual : PAGE_DESCRICAO_HOTEL,
                hotelAtual : item
              })
            } }/>
        ) }

        {/* DESCRIÇÃO DO HOTEL */}
        { this.state.paginaAtual === PAGE_DESCRICAO_HOTEL && (
          <Descricao 
            hotel={ this.state.hotelAtual }
            onPressFechar={ this.paginaHoteis }/>
        ) }
      </SafeAreaView>
    )
  }
}

export default App
