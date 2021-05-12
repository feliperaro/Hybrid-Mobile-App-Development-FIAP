import React from 'react'
import {
  Button,
  Image,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native'

import natureza from './assets/img/natureza.jpg'

class App extends React.Component {
  state = {
    contador : 0,
    isEnabled : false,
    nome : ""
  }

  render() {
    return (
      <View>
        <Image
          resizeMode= 'cover'
          source= { natureza }
          style= {{ height : 200, width : 300 }}/>

        <Button
          color= '#333'
          onPress={ () => {
            alert('Button foi pressionado!')
            this.setState({ contador : this.state.contador + 1 })
          }}
          title='Clique-me'/>

        <TouchableOpacity
          activeOpacity={ 0.85}
          onPress={ () => {
            alert('TouchableOpacity foi pressionado!') 
            this.setState({ contador : this.state.contador + 1 })
          }}>

          <Text style={ styles.button }>Clique-me</Text>
        </TouchableOpacity>

        <TouchableHighlight
          onPress={ () => {
            alert('TouchableHighlight foi pressionado!') 
            this.setState({ contador : this.state.contador + 1 })
          }}
          underlayColor='#005'>
          <Text style={ styles.button }>Clique-me</Text>
        </TouchableHighlight>

        <View style={{ flexDirection : 'row' }}>
          <Text>Ativar Opção?</Text>
          <Switch
            onValueChange={ () => this.setState({ isEnabled: !this.state.isEnabled })}
            value={ this.state.isEnabled } 
          />
        </View>
        <Text>Contador de Cliques: { this.state.contador }</Text>

        { this.state.isEnabled && (
          <Text>Opção Ativa!</Text>
        )}

        <TextInput
          onChangeText={ (txt) => this.setState({ nome : txt })}
          placeholder='Digite seu nome'
          value={ this.state.nome }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button : {
    backgroundColor : '#F00',
    borderRadius : 10,
    color : '#FFF',
    margin : 8,
    padding : 16,
    textAlign : 'center',
    width : 200
  }
})

export default App