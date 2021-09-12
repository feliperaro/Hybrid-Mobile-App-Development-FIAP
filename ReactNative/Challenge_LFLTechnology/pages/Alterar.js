import React from 'react'
import {
	SafeAreaView,
	StyleSheet,
	Text
} from 'react-native'

import Botao from '../componentes/Botao'

const Alterar = (props) => {
	const { usuario } = props.route.params

	const alterarEmail = () => props.navigation.navigate('alterarEmail', { usuario })
	const alterarSenha = () => props.navigation.navigate('alterarSenha', { usuario })
	const voltar = () => props.navigation.goBack()

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.textStyle}>{'Alterar dados'}</Text>

			<Botao
				onPress={alterarEmail}
				text={'Alterar email'}
			/>

			<Botao
				onPress={alterarSenha}
				text={'Alterar senha'}
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

export default Alterar