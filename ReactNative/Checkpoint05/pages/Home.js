import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	Text
} from 'react-native';

import Botao from '../componentes/Botao';

const Home = (props) => {

	const entrar = () => {
		props.navigation.navigate('entrar')
	}

	const cadastrar = () => {
		props.navigation.navigate('cadastrar')
	}

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.inputView}>Seja bem-vindo!</Text>

			<Botao
				onPress={entrar}
				text={'Entrar'}
			/>

			<Botao
				onPress={cadastrar}
				text={'Cadastrar'}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	inputView: {
		borderRadius: 30,
		height: 45,
		fontSize: 20,
		fontWeight: 'bold',
		alignItems: "center",
		textAlign: 'center'
	}
})

export default Home;