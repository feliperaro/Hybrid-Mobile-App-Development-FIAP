import React from 'react'
import { 
	StyleSheet,
  Text,
  TouchableOpacity,
	View 
} from 'react-native'

class Descricao extends React.Component {
	render() {
		return (
			<View style={ styles.page }>
				<TouchableOpacity 
					onPress={ () => {
						if ( typeof this.props.onPressFechar === 'function') {
							this.props.onPressFechar()
						}
					} }
					style={ styles.fechar }>
					<Text>Fechar (x)</Text>          
				</TouchableOpacity>

        <Text tyle={ styles.produtoDescricaoNome }>
          { this.props.hotel.nome}
        </Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	fechar : {
    alignSelf : 'flex-end',
    padding : 8
  },
  page : {
    padding : 16
  },
  produtoDescricao : {
    marginBottom : 8,
  },
  produtoDescricaoImagem : {
    height : 200,
    marginVertical : 8
  },
  produtoDescricaoNome : {
    fontSize : 28,
    fontWeight : 'bold'
  },
  produtoDescricaoValor : {
    fontSize : 18,
    marginVertical : 8
  }
})

export default Descricao