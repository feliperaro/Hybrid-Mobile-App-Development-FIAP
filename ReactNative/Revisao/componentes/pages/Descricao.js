import React from 'react'
import {  
	Button,
  Image,
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

				<Text style={ styles.produtoDescricaoNome }>
					{ this.props.produto.nome }
				</Text>

				<Image
					source={{ uri : this.props.produto.imagem }}
          style={ styles.produtoDescricaoImagem }/>

        <Text style={ styles.produtoDescricao }>
          { this.props.produto.descricao }
        </Text>

        <Text>Estoque: { this.props.produto.estoque }</Text>

        <Text style={ styles.produtoDescricaoValor }>
          Valor: { this.props.produto.valor }
        </Text>

        { this.props.produto.estoque > 0 && (
          <Button color='#489800' title='Comprar' />
        ) }

        { this.props.produto.estoque <= 0 && (
          <Text style={ styles.indisponivel }>
            Indisponível
          </Text>
        ) }            
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