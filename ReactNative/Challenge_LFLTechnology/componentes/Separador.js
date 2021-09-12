import React from 'react'
import { StyleSheet, View } from 'react-native'

const Separador = () => {
	return (
		<View style={styles.separador} />
	)
}

const styles = StyleSheet.create({
	separador: {
		marginVertical: 3,
		borderBottomColor: '#737373',
		borderBottomWidth: StyleSheet.hairlineWidth,
	}
})

export default Separador