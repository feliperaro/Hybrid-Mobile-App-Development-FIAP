import React, { useState } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	Text
} from 'react-native';

import { read } from '../database/BD';

import Botao from '../componentes/Botao';
import { Input } from 'react-native-elements';

const Entrar = (props) => {

	const [senha, setSenha] = useState('')
	const [usuario, setUsuario] = useState('')

	const entrar = () => {
		{
			validarInputs() && (
				read(usuario, (error, success) => {
					if (error || !success) {
						alert('Usuário e/ou Senha inválidos')
						return
					}

					let obj = JSON.parse(success)
					if (senha === obj.senha) {
						let email = obj.email

						props.navigation.reset({
							index: 0,
							routes: [{
								name: 'welcome',
								params: { usuario, email }
							}]
						})
					} else {
						alert('Usuário e/ou Senha inválidos')
					}
				})
			)
		}
	}

	const validarInputs = () => {
		if (usuario == '') {
			return alert('Por favor insira o seu usuario')
		}

		if (senha == '') {
			return alert('Por favor insira a sua senha')
		}

		return true
	}

	const voltar = () => props.navigation.goBack()

	return (
		<ScrollView style={styles.scrollViewStyle}>
			<SafeAreaView style={styles.container}>
				<Text style={styles.inputView}>{'Login'}</Text>

				<Input
					onChangeText={(value) => {
						setUsuario(value)
					}}
					placeholder='Usuário'
					style={styles.textInput}
				/>

				<Input
					onChangeText={(value) => {
						setSenha(value)
					}}
					placeholder='Senha'
					secureTextEntry={true}
					style={styles.textInput}
				/>

				<Botao
					onPress={entrar}
					text={'Entrar'}
				/>

				<Botao
					onPress={voltar}
					text={'Voltar'}
				/>
			</SafeAreaView>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		backgroundColor: "#e6ffff",
		flex: 1,
		justifyContent: "center",
		marginTop : 10
	},
	inputView: {
		alignItems: "center",
		borderRadius: 30,
		fontSize: 20,
		fontWeight: 'bold',
		height: 45,
		textAlign: 'center'
	},
	scrollViewStyle : { 
    backgroundColor: "#e6ffff" 
  },
	textInput: {
		flex: 1,
		height: 50,
		padding: 10,
	}
})

export default Entrar;