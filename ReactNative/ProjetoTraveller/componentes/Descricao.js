import React from 'react'
import { 
  Image,
	StyleSheet,
  Linking,
  Text,
  TouchableOpacity,
	View 
} from 'react-native'

const textIrPaginaOficial = 'Ir para site oficial'

class Descricao extends React.Component {

  abrePaginaHotel = (linkPaginaHotel) => Linking.openURL( linkPaginaHotel )

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

        <Image 
          source={{ uri : this.props.hotel.imagem }}
          style={ styles.hotelDescricaoImagem }/>

        {/* NOME */}
        <Text style={ styles.hotelDescricaoNome }>
          { this.props.hotel.nome}
        </Text>
        
        {/* ESTRELAS */}
        <Text style={ styles.hotelDescricaoEstrelas }> 
          Hotel { this.props.hotel.estrelas} estrelas!
        </Text>

        {/* PREÇO */}
        <Text style={ styles.hotelDescricaoValor }>
          Preço diária: { this.props.hotel.valor}
        </Text>

        {/* ENDEREÇO */}
        <Text style={ styles.hotelDescricaoEndereco }>
          Endereço: { this.props.hotel.endereco}
        </Text>

        {/* TELEFONE */}
        <Text style={ styles.hotelDescricaoTelefone }>
          Telefone: { this.props.hotel.telefone}
        </Text>

        {/* IR PARA PAGINA OFICIAL */}
        <Text 
          onPress={ () => this.abrePaginaHotel(this.props.hotel.linkPaginaHotel) }
          style={ styles.hyperLinkStyle } >
          
          { textIrPaginaOficial }
        </Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  fechar : {
    alignSelf : 'flex-end',
    padding : 8,
  },
  hotelDescricaoEndereco : {
    fontWeight : '900',
    fontSize : 20,
    marginVertical : 5,
    
  },
  hotelDescricaoEstrelas : {
    fontSize : 20,
    fontWeight : 'bold',
    textAlign : 'center',
    marginBottom : 15
  },
  hotelDescricaoTelefone : {
    fontSize : 20,
    fontWeight : '900',
    marginVertical : 5,
  },
  hotelDescricaoValor : {
    fontSize : 20,
    fontWeight : '900',
    marginVertical : 5,
  },
  hotelDescricaoImagem : {
    height : 200,
    marginVertical : 8,
  },
  hotelDescricaoNome : {
    fontSize : 20,
    fontWeight : 'bold',
    textAlign : 'center',
    padding : 8,
  },
  hyperLinkStyle : {
    color : 'blue',
    fontSize : 20,
    marginVertical : 8,
    marginTop : 50,
    fontWeight : 'bold',
    textAlign : 'center'
  },
  imagem : {
    alignSelf : 'center',
    height : 200,
    width : 200
  },
  page : {
    padding : 16,
  }
})

export default Descricao
