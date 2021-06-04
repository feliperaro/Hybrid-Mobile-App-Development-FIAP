import React from 'react'
import { 
	Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput
} from 'react-native'
import {

} from 'react-native'

class Contato extends React.Component {
	render () {
		return (
			<ScrollView>
				<Text>Nome:</Text>
				<TextInput style={ estilos.input } />

        <Text>E-mail:</Text>
        <TextInput style={ estilos.input }/>

        <Text>Mensagem:</Text>
        <TextInput multiline={ true } textAlignVertical='top' style={ [estilos.input, estilos.textarea] } />

        <Button color='#489800' title='Enviar'/>
			</ScrollView>
		)
	}
}

const estilos = StyleSheet.create({
  input : {
    borderColor : '#CCC',
    borderRadius : 5,
    borderWidth : 1,
    height : 40,
    marginBottom : 8
  },
  page : {
    padding : 16
  },
  textarea : {
    height : 200
  }
})

export default Contato