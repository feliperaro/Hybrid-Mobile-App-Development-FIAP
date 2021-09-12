import React from 'react';
import {
	TouchableOpacity,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from 'react-native';

import { clear } from '../database/BD'
import Botao from '../componentes/Botao';
import Separador from '../componentes/Separador';

const Welcome = (props) => {
	const { usuario } = props.route.params || '';
	const { email } = props.route.params || '';

	const logout = () => {
		props.navigation.navigate('home');
	}

	const limparBanco = () => {
		clear((error) => {
			if (error) {
				alert('Não foi possível limpar o banco de dados')
			} else {
				alert('Banco resetado com sucesso!')
				logout()
			}
		})
	}

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.textHello}>Bem vindo {usuario}!</Text>
			<Separador />

			<Text style={styles.textHello}>Seu email é {email}</Text>
			<Separador />

			{usuario == 'fiap' && (
				<Botao
					onPress={limparBanco}
					text={'Limpar banco de dados'}
				/>
			)}

			<Botao
				onPress={logout}
				text={'Sair'}
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
	textHello: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		padding: 8,
	}
})

export default Welcome;