import React from 'react'
import {
	StyleSheet,
	Text,
	TouchableOpacity
} from 'react-native'

const Botao = (props) => {

	onPress = () => {
		if (typeof props.onPress === 'function') {
			props.onPress()
		}
	}

	return (
		<TouchableOpacity
			onPress={onPress}
			style={styles.button}>

			<Text style={styles.textButton}>{props.text}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		backgroundColor: "#C4FCEF",
		borderRadius: 25,
		height: 50,
		justifyContent: "center",
		marginBottom: 10,
		marginTop: 20,
		width: "80%",
	},
	textButton: {
		borderRadius: 25,
		height: 25,
		fontSize: 18,
		fontWeight: '800',
		alignItems: "center",
		textAlign: 'center',
		fontWeight: 'bold',
	}
})

export default Botao