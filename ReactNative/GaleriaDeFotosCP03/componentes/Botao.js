import React from 'react'
import {
  StyleSheet,
	TouchableOpacity,
  Text
} from 'react-native'

class Botao extends React.Component {

  onPress = () => {
    if ( typeof this.props.onPress === 'function' ) {
      this.props.onPress()
    }
  }

  render() {
    return (
      <TouchableOpacity 
        activeOpacity={ 0.75 }
        onPress={ this.onPress }
        style={ styles.button }>

        <Text style={ styles.buttonText }>
          { this.props.text }
        </Text>
      </TouchableOpacity>
    )
  }
} 

const styles = StyleSheet.create ({
  button : {
    backgroundColor : '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12 ,
    justifyContent : 'center',
    height : 50,
    marginTop : 8
  },
  buttonText : {
    fontSize: 18,
    fontWeight: "bold",
    textAlign : 'center',
    textTransform : 'uppercase'
  } 
})

export default Botao