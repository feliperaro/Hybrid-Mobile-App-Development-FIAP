import React from 'react'
import { 
	StyleSheet,
	Text,
  TouchableOpacity,
  View
} from 'react-native'

const PAGE_HOTEIS = 0

class Titulo extends React.Component {

	state = {
		paginaAtual : this.props.paginaAtual
	}

	render() {

		const estiloMenu = styles.buttonTextMenu
    const estiloMenuAtivo = [styles.buttonTextMenu, styles.buttonTextMenuAtivo]

		return (
			<View style={ styles.menu }>
				<TouchableOpacity
					onPress={ () => {
						if ( typeof this.props.onPress === 'function') {
							this.props.onPress()
						}
					}}>

					<Text style={ this.state.paginaAtual == PAGE_HOTEIS ? estiloMenuAtivo : estiloMenu }>
            { this.props.text }
					</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create ({
  buttonTextMenu : {
    borderRadius : 5,
    fontSize : 18,
    marginTop : 20,
    padding : 8,
  },
  buttonTextMenuAtivo : {
    backgroundColor : '#00BCD4'
  }, 
  menu : {
    backgroundColor : '#00BCD4',
    flexDirection : 'row',
    padding : 8,
    justifyContent : 'center'
  }
})

export default Titulo
