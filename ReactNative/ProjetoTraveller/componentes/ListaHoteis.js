import React from 'react'
import {
	Text,
  TouchableOpacity,
  StyleSheet,
  View,
  FlatList,
  Image
} from 'react-native'

class ListaHoteis extends React.Component {
	render () {
		return (
			<View style={ styles.page }>
				<FlatList 
					contentContainerStyle={{ paddingBottom: 150 }}
					data={ this.props.hoteis }
					keyExtractor={ (item) => item.id.toString() }
					numColumns={1}
					renderItem={ ({item}) => (
						<TouchableOpacity 
							onPress={ () => {
								if ( typeof this.props.onPress === 'function') {
									this.props.onPress(item)
								}
							} }
							style={ styles.hotel }>

							<Image
								source={{ uri : item.imagem }}
								style={ styles.hotelImagem }/>

							<View>
								<Text style={ styles.hotelNome }>
									{ item.nome }
								</Text>
						
								<Text style={ styles.hotelNome }>
									Valor: { item.valor }
								</Text>
							</View>
						</TouchableOpacity>
					)} />
			</View>
		)
	}
}

const styles = StyleSheet.create ({
  page : {
    padding : 10,
  },
  hotel : {
    borderBottomColor : '#CCC',
    borderBottomWidth : 3,
    flexDirection : 'row',
    padding : 15
  },  
  hotelImagem : {
    height : 80,
    marginRight : 8,
    width : 100
  },  
  hotelNome : {
    fontSize : 16,
    fontWeight : 'bold'
  }
})

export default ListaHoteis
