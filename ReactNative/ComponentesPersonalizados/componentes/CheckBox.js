import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

class CheckBox extends React.Component {
	
	state = {
    isChecked : this.props.checked
  }

	pressionar = () => {
		const newCheched = !this.state.isChecked
		this.setState({ isChecked : newCheched }) 
		
		if ( typeof this.props.onChecked === 'function' ) {
			this.props.onChecked(newCheched)
		}
	}

	render () {

		const quadrado = [styles.checkbox]

		if ( this.state.isChecked ) {
			quadrado.push( styles.checkboxAtivo )
		}

		return (
			<TouchableOpacity 
				activeOpacity={ 0.6 }
				onPress={ () => this.pressionar()	}
				style={ styles.containerCheck }>


				<View style={ quadrado } />
				<Text>{ this.props.text || "Texto default"}</Text>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create ({
  containerCheck : {
    alignItems : 'center',
    flexDirection : 'row',
    padding : 8
  },
  checkbox : {
    borderColor : '#CCC',
    borderRadius : 5,
    borderWidth : 1,
    height : 18,
    marginRight : 8,
    width : 18
  },
  checkboxAtivo : {
    backgroundColor : '#0F0'
  }
})

export default CheckBox