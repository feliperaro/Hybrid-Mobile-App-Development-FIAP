import React, {
	useEffect,
	useState
} from 'react'
import {
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text
} from 'react-native'

import { read, updateItem } from '../database/BD'

import Botao from '../componentes/Botao'
import { Input } from 'react-native-elements'

const AlterarSenha = (props) => {
	const { usuario } = props.route.params

	const [confirmarSenha, setConfirmarSenha] = useState('')
	const [senha, setSenha] = useState('')
	const [senhaAtual, setSenhaAtual] = useState('')
	const [senhaUsuario, setSenhaUsuario] = useState('')

	useEffect(() => {
		read(usuario, (error, success) => {
			if (error) {
				alert('Não foi possível encontrar a senha do usuario')
				return
			}

			const obj = JSON.parse(success)			
			const senha = obj.senha

			console.log(senha);
			setSenhaUsuario(senha)
		})
	}, [])

	const alterar = () => {
		if (validaInputs() === true) {
			const usuarioSenhaNova = {
				usuario,
				senha
			}

			updateItem(usuario, usuarioSenhaNova, (error) => {
				if (error) {
					alert('Não foi possível alterar a senha!')
					return
				}
			})
			setSenhaUsuario(senha)
			alert('Senha alterada com sucesso!')
			props.navigation.goBack()
		}
	}

	const validaInputs = () => {
		if (senhaAtual.trim().length === 0) {
			alert('Por favor, insira sua senha atual!')
			return false
		}

		if (!validaSenhaAtual(senhaAtual)) {
			alert('Sua senha atual digitada não confere!')
			return false
		}

		if (senha.trim().length === 0) {
			alert('Por favor, digite sua nova senha!')
			return false
		}

		if (confirmarSenha.trim().length === 0) {r
			alert('Por favor, confirme sua nova senha!')
			return false
		}

		if (senha !== confirmarSenha) {
			alert('As senhas digitadas não conferem!')
			return false
		}

		return true
	}

	const validaSenhaAtual = (senhaAtual) => {
		if (senhaAtual !== senhaUsuario) {
			return false
		}

		return true
	}

	const voltar = () => props.navigation.goBack()

	return (
		<ScrollView style={styles.scrollViewStyle}>
			<SafeAreaView style={styles.container}>

				<Text style={styles.inputView}>{'Digite sua senha atual'}</Text>
				<Input
					secureTextEntry={true}
					onChangeText={(value) => {
						setSenhaAtual(value)
					}}
					placeholder='Senha atual'
					style={styles.textInput}
					value={senhaAtual}
				/>

				<Text style={styles.inputView}>{'Digite sua nova senha'}</Text>
				<Input
					secureTextEntry={true}
					onChangeText={(value) => {
						setSenha(value)
					}}
					placeholder='Nova senha'
					style={styles.textInput}
					value={senha}
				/>

				<Input
					secureTextEntry={true}
					onChangeText={(value) => {
						setConfirmarSenha(value)
					}}
					placeholder='Digite novamente'
					style={styles.textInput}
					value={confirmarSenha}
				/>

				<Botao
					onPress={alterar}
					text={'Alterar Senha'}
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
		marginTop : 5
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
	textHello: {
		fontSize: 20,
		fontWeight: 'bold',
		padding: 8,
		textAlign: 'center',
	},
	textInput: {
		flex: 1,
		height: 50,
		padding: 10,
	},
})

export default AlterarSenha