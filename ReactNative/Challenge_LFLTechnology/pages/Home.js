import React from 'react';
import {
	View,
	SafeAreaView,
	StyleSheet,
	Text
} from 'react-native';

import Botao from '../componentes/Botao';
import { Image } from 'react-native-elements';

const logo = require('../assets/images/mobile-phones.png')

const Home = (props) => {
	
	const cadastrar = () => {
		props.navigation.navigate('cadastrar')
	}
	const entrar = () => {
		props.navigation.navigate('entrar')
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.imageView}>
				<Image
					source={logo}
					style={styles.imageStyle}	
				/>
			</View>

			<Text style={styles.inputView}>Seja bem-vindo!</Text>

			<Botao
				onPress={entrar}
				text={'Entrar'}
			/>

			<Botao
				onPress={cadastrar}
				text={'Criar Conta'}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		backgroundColor: "#e6ffff",
		flex: 1,
		justifyContent: "center",
	},
	imageStyle : { 
		height: 140,
		resizeMode: "contain",
		width: 200
	},
	imageView : {
		marginBottom : 45,
		marginLeft : 20,
		marginTop : 10,
		position : 'relative',
	},
	inputView: {
		alignItems: "center",
		borderRadius: 30,
		fontSize: 20,
		fontWeight: 'bold',
		height: 45,
		textAlign: 'center'
	}
})

export default Home;