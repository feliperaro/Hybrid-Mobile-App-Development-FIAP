import React from 'react';
import {
	TouchableOpacity,
	StyleSheet,
	Text,
	View,
} from 'react-native';

const Separator = () => (
	<View style={styles.separator} />
);

const Welcome = (props) => {
	const { name } = props.route.params || '';
	const { password } = props.route.params || '';

	const logout = () => props.navigation.goBack();
	const showPassword = () => alert('Your password is ' + password)

	return (
		<View style={styles.container}>
			<Text style={styles.textHello}>Hello {name}!</Text>

			<Separator />

			<TouchableOpacity
				onPress={showPassword}
				style={styles.btnWelcome}>
				<Text style={styles.textButton}>Remember your password</Text>
			</TouchableOpacity>

			<Separator />

			<TouchableOpacity
				onPress={logout}
				style={styles.btnWelcome}>
				<Text style={styles.textButton}>Logout</Text>
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
	btnWelcome: {
		width: "80%",
		borderRadius: 25,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 40,
		backgroundColor: "#03C0DA",
	},
	separator: {
		marginVertical: 3,
		borderBottomColor: '#737373',
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	textButton: {
		borderRadius: 25,
		height: 25,
		fontSize: 18,
		fontWeight: '800',
		alignItems: "center",
		textAlign: 'center'
	},
	textHello: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		padding: 8,
	}
})

export default Welcome;