import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from 'react-native';

import Botao from '../componentes/Botao';
import { Image } from 'react-native-elements'
import Separador from '../componentes/Separador';

const image = require('../assets/images/mobile-phones.png')

const Welcome = (props) => {
	const { usuario } = props.route.params

	// Felipe Ramos Roque - RM: 86373
	// Lucas Kazuo Sakata - RM: 81223
	// Lucas Padovani - RM: 80203
	// Luis Felipe dos Santos Robbo - RM: 82762
	const usuariosAdmin = ['rm86373', 'rm81223', 'rm80203', 'rm82762']

	const alterar = () => {
		props.navigation.navigate('alterar', {
			usuario
		})
	}

	const ehAdmin = (usuario) => { return usuariosAdmin.includes(usuario) === true ? true : false }
	
	const limparBanco = () => {
		props.navigation.navigate('limparBanco', {
			usuario
		})
	}

	const logout = () => {
		props.navigation.reset({
			index: 0,
			routes: [{
				name: 'home'
			}]
		})
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.imageView}>
				<Image
					source={image}
					style={styles.imageStyle}
				/>
			</View>

			<Text style={styles.textStyle}>Olá {usuario}!</Text>
			<Separador />

			{ehAdmin(usuario) && (
				<Text style={styles.textStyle}>{'Você é um administrador do sistema.'}</Text>
			)}

			{ehAdmin(usuario) && (
				<Botao
					onPress={limparBanco}
					text={'Limpar banco de dados'}
				/>
			)}

			{!ehAdmin(usuario) && (
				<Text style={styles.textStyle}>{'Seja bem vindo :D'}</Text>
			)}

			<Botao
				onPress={alterar}
				text={'Alterar Dados'}
			/>

			<Botao
				onPress={logout}
				text={'Sair'}
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
	imageStyle: {
		height: 140,
		resizeMode: "contain",
		width: 200
	},
	imageView: {
		marginBottom: 30,
		marginLeft: 20,
		marginTop: 1,
		position: 'relative',
	},
	textStyle: {
		fontSize: 20,
		fontWeight: 'bold',
		padding: 8,
		textAlign: 'center',
	}
})

export default Welcome;