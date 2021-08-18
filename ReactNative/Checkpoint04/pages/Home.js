import React, {
	useState,
} from 'react';
import {
	TouchableOpacity,
	StyleSheet,
	Text,
	View,
} from 'react-native';

import { Input } from 'react-native-elements';

const Home = (props) => {

	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');

	const defaultPassword = 'fiap';

	const validateLogin = () => {
		if (user == '') {
			return alert('Please insert your username')
		}

		if (password == '') {
			return alert('Please insert your password')
		}

		if (password == defaultPassword && user == password) {
			props.navigation.navigate('welcome', {
				name: user,
				password: password
			});
		} else {
			return alert('You have entered an invalid username or password!')
		}
	}

	return (
		<View style={styles.container}>
			<Text style={styles.inputView}>Welcome back.</Text>

			<Input
				onChangeText={(value) => {
					setUser(value)
				}}
				placeholder='Username'
				style={styles.textInput}
			/>

			<Input
				onChangeText={(value) => {
					setPassword(value)
				}}
				placeholder='Password'
				secureTextEntry={true}
				style={styles.textInput}
			/>

			<TouchableOpacity
				onPress={validateLogin}
				style={styles.loginBtn}>

				<Text style={styles.textButton}>Login</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	textInput: {
		height: 50,
		flex: 1,
		padding: 10,
	},
	inputView: {
		borderRadius: 30,
		height: 45,
		fontSize: 20,
		fontWeight: 'bold',
		alignItems: "center",
		textAlign: 'center'
	},
	loginBtn: {
		width: "80%",
		borderRadius: 25,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 40,
		backgroundColor: "#03C0DA",
	},
	textButton: {
		borderRadius: 25,
		height: 25,
		fontSize: 18,
		fontWeight: '800',
		alignItems: "center",
		textAlign: 'center'
	}
})

export default Home;