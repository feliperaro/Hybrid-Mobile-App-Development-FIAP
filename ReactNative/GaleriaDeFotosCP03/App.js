import React from 'react'
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet
} from 'react-native'

import pessoa00 from './assets/img/p0.png'
import pessoa01 from './assets/img/p1.png'
import pessoa02 from './assets/img/p2.png'
import pessoa03 from './assets/img/p3.png'
import pessoa04 from './assets/img/p4.png'
import pessoa05 from './assets/img/p5.png'
import pessoa06 from './assets/img/p6.png'

import Botao from './componentes/Botao'

const imagems = [
  pessoa00, 
  pessoa01, 
  pessoa02, 
  pessoa03, 
  pessoa04, 
  pessoa05, 
  pessoa06
]

class App extends React.Component {

  state = {
    indice : 0
  }

  alteraImagem = (indice) => {
    alert(`Imagem ${ indice + 1 }`)

    this.setState({ indice })
  }

  imagemAnterior = () => {
    const indice = ( this.state.indice <= 0 )
                      ? imagems.length - 1
                      : this.state.indice - 1

    this.alteraImagem(indice)
  }

  proximaImagem = () => {
    const indice = ( this.state.indice >= imagems.length - 1 )
                      ? 0
                      : this.state.indice + 1

    this.alteraImagem(indice)
  }

  render() {
    return (
      <SafeAreaView style={ styles.container }>
        <StatusBar backgroundColor='#16b437'/>

        <Image 
          source={ imagems[ this.state.indice ] }
          style={ styles.imagem }/>
        <Botao 
          onPress={ this.imagemAnterior }
          text="Imagem anterior"
        />
        <Botao 
          onPress={ this.proximaImagem }
          text="Próxima imagem"
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create ({
  container : {
    backgroundColor : "#f6d759",
    flex : 1,
    padding : 16
  },
  imagem : {
    alignSelf : 'center',
    height : 200,
    width : 200
  }  
})

export default App