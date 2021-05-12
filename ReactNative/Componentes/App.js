import React from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native'

class App extends React.Component {
  render() {
    return ( 
      <View style={ styles.container }>
        <Text 
            ellipsizeMode= 'middle'
            numberOfLines= { 1 }
            selectable= { true }
            style={ styles.texto }> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Pellentesque porta felis justo, tincidunt pulvinar urna vestibulum sed. 
            Nunc pellentesque elementum sem varius sollicitudin. 
            Pellentesque elementum a tellus eget lobortis. 
            Aenean pretium lorem non dignissim accumsan. 
        </Text>  

        <TextInput 
            autoFocus= { false }
            editable= { true }
            keyboardType= 'numeric'
            maxLength= { 50 }
            multiline= { true }
            onFocus={() => alert('O campo recebeu foco')}
            placeholder= 'Digite algo aqui'
            style={ styles.input }
            textAlignVertical= 'top'
        />

        <View style={ styles.retangulo }></View> 
        <View style={ styles.retangulo }></View> 
        <View style={ styles.retangulo }></View> 
        <View style={ styles.retangulo }></View> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#F00', 
        flex : 1, 
        padding : 30 
    },
    input : {
        backgroundColor : '#FFF',
        borderColor : '#333',
        borderRadius : 5,
        borderWidth : 5,
        height : 200,
        padding : 10
    },
    texto : {
        color : '#FFF' 
    },
    retangulo : {
        backgroundColor : '#333',
        borderRadius : 10,
        height : 100,
        marginTop : 10,
        width : 300 
    }
})

export default App