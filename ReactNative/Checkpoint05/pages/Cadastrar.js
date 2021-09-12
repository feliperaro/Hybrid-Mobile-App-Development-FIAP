import React, {
	useState
} from 'react'
import {
	SafeAreaView,
	StyleSheet,
	Text
} from 'react-native'

import Botao from '../componentes/Botao';
import { Input } from 'react-native-elements';
import { insertObject } from '../database/BD'

const Cadastrar = (props) => {

	const [usuario, setUsuario] = useState('');
	const [email, setEmail] = useState('')
	const [senha, setSenha] = useState('')
	const [confirmarSenha, setConfirmarSenha] = useState('')

	const validaInputs = () => {
		if (usuario.trim().length == 0) {
			return alert('Por favor insira o usuario')
		}

		if (email.trim().length == 0) {
			return alert('Por favor insira o email')
		}

		if (senha.trim().length == 0) {
			return alert('Por favor insira a senha')
		}

		if (confirmarSenha.trim().length == 0) {
			return alert('Por favor confirme sua senha')
		}

		if (senha != confirmarSenha) {
			return alert('As senhas digitadas não conferem!')
		}

		return true
	}

	const cadastraUsuario = (user) => {
		insertObject(user.usuario, user, (error) => {
			if (error) {
				return alert('erro ao cadastrar o usuário')
			}
		})
		return true
	}

	const cadastrar = () => {
		if (validaInputs() === true) {
			const user = {
				usuario,
				email,
				senha
			}

			if (cadastraUsuario(user) === true) {
				alert('Usuário cadastrado com sucesso!')
				props.navigation.navigate('home')
			}
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.inputView}>Cadastre seu usuário</Text>

			<Input
				onChangeText={(value) => {
					setUsuario(value)
				}}
				placeholder='Usuário'
				style={styles.textInput}
			/>

			<Input
				onChangeText={(value) => {
					setEmail(value)
				}}
				placeholder='Email'
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

			<Input
				onChangeText={(value) => {
					setConfirmarSenha(value)
				}}
				placeholder='Confirmar Senha'
				secureTextEntry={true}
				style={styles.textInput}
			/>

			<Botao
				onPress={cadastrar}
				text={'Cadastrar'}
			/>
		</SafeAreaView>
	)
}

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
	},
	textInput: {
		height: 50,
		flex: 1,
		padding: 10,
	}
})

export default Cadastrar