import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Button
} from 'react-native'
import Botao from './Botao'
import Imagem from './Imagem'

class ContainerApp extends React.Component {

  render() {
    return (
			<View style={ styles.container }>
        <Imagem/>  

        <Botao/>
      </View>


    )
  }
} 

const styles = StyleSheet.create ({
  container : {
    backgroundColor : "#2f4f4f",
    flex: 1,
    justifyContent: "center",
    padding: 16,
  }
})

export default ContainerApp