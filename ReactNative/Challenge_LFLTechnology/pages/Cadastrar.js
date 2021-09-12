import React, {
	useState,
	useEffect
} from 'react'
import {
	StyleSheet,
	Text,
	SafeAreaView,
} from 'react-native'

import { insertObject, read } from '../database/BD'

import Botao from '../componentes/Botao';
import { Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

const Cadastrar = (props) => {

	const [confirmarEmail, setConfirmarEmail] = useState('')
	const [confirmarSenha, setConfirmarSenha] = useState('')
	const [email, setEmail] = useState('')
	const [senha, setSenha] = useState('')
	const [usuario, setUsuario] = useState('');
	const [usuarioJaCadastrado, setUsuarioJaCadastrado] = useState(false)

	const cadastrar = () => {
		if (validaInputs() === true) {
			const user = {
				usuario,
				email,
				senha
			}

			if (cadastraUsuario(user) === true) {
				limparCampos()
				props.navigation.navigate('home')
			}
		}
	}

	const cadastraUsuario = (user) => {
		insertObject(user.usuario, user, (error) => {
			if (error) {
				alert('Não foi possível cadastrar o usuário no banco de dados!')
				return false
			} else {
				alert('Usuário cadastrado com sucesso!')
			}
		})
		return true
	}

	const limparCampos = () => {
		setUsuario('')
		setEmail('')
		setConfirmarEmail('')
		setSenha('')
		setConfirmarSenha('')
	}

	const validateEmail = (email) => {
		const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return re.test(email);
	}

	const validaInputs = () => {
		if (usuario.trim().length === 0) {
			alert('Por favor, insira o usuario!')
			return false
		}

		if (usuarioJaCadastrado === true) {
			alert('Nome de usuário já cadastrado!')
			return false
		}

		if (email.trim().length === 0) {
			alert('Por favor, insira o email!')
			return false
		}

		if (!validateEmail(email)) {
			alert('Por favor, digite um email válido!')
			return false
		}

		if (confirmarEmail.trim().length === 0) {
			alert('Por favor, insira o email!')
			return false
		}

		if (!validateEmail(confirmarEmail)) {
			alert('Por favor, digite um email válido!')
			return false
		}

		if (senha.trim().length === 0) {
			alert('Por favor, insira a senha!')
			return false
		}

		if (confirmarSenha.trim().length === 0) {
			alert('Por favor, confirme sua senha!')
			return false
		}

		if (confirmarEmail.trim().length === 0) {
			alert('Por favor, confirme seu email!')
			return false
		}

		if (email !== confirmarEmail) {
			alert('Os emails digitados não conferem!')
			return false
		}

		if (senha !== confirmarSenha) {
			alert('As senhas digitadas não conferem!')
			return false
		}

		return true
	}

	const voltar = () => props.navigation.goBack()

	useEffect(() => {
		read(usuario, (error, success) => {
			if (error) {
				return
			}

			let obj = JSON.parse(success)
			
			let result = obj === null ? false : true

			setUsuarioJaCadastrado(result)
		})
	}, [usuario])

	return (
		<ScrollView style={styles.scrollViewStyle}>
			<SafeAreaView style={styles.container}>
				<Text style={styles.inputView}>Cadastre seu usuário</Text>

				<Input
					onChangeText={(value) => {
						setUsuario(value)
					}}
					placeholder='Usuário'
					style={styles.textInput}
					value={usuario}
				/>

				<Input
					keyboardType={'email-address'}
					onChangeText={(value) => {
						setEmail(value)
					}}
					placeholder='Email'
					style={styles.textInput}
					value={email}
				/>

				<Input
					keyboardType={'email-address'}
					onChangeText={(value) => {
						setConfirmarEmail(value)
					}}
					placeholder='Confirmar Email'
					style={styles.textInput}
					value={confirmarEmail}
				/>

				<Input
					onChangeText={(value) => {
						setSenha(value)
					}}
					placeholder='Senha'
					secureTextEntry={true}
					style={styles.textInput}
					value={senha}
				/>

				<Input
					onChangeText={(value) => {
						setConfirmarSenha(value)
					}}
					placeholder='Confirmar Senha'
					secureTextEntry={true}
					style={styles.textInput}
					value={confirmarSenha}
				/>

				<Botao
					onPress={cadastrar}
					text={'Cadastrar'}
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
	},
	inputView: {
		alignItems: "center",
		borderRadius: 30,
		fontSize: 20,
		fontWeight: 'bold',
		height: 45,
		textAlign: 'center'
	},
	scrollViewStyle: {
		backgroundColor: "#e6ffff"
	},
	textInput: {
		flex: 1,
		height: 50,
		padding: 10,
	}
})

export default Cadastrar