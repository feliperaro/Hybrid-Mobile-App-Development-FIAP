import React from "react";
import {
	SafeAreaView,
	StyleSheet,
	Text,
} from 'react-native'

import Botao from "../componentes/Botao"; 
import { clear } from "../database/BD";

const LimparBanco = (props) => {

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

	const logout = () => {
		props.navigation.reset({
			index: 0,
			routes: [{
				name: 'home'
			}]
		})
	}

	const voltar = () => props.navigation.goBack()

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.textStyle}>{'Apagar usuários do sistema? CUIDADO!'}</Text>

			<Botao
				onPress={limparBanco}
				text={'Limpar Banco'}
			/>

			<Botao
				onPress={voltar}
				text={'Voltar'}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		backgroundColor: "#e6ffff",
		flex: 1,
		justifyContent: "center",
	},
	textStyle: {
		fontSize: 20,
		fontWeight: 'bold',
		padding: 8,
		textAlign: 'center',
	}
})

export default LimparBanco