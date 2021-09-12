import AsyncStorage from "@react-native-async-storage/async-storage";

const updateItem = async (key, value, callback = null) => {
	try {
		const obj = JSON.stringify(value)
		const item = await AsyncStorage.getItem(key, callback)
		await AsyncStorage.setItem(key, item, () => AsyncStorage.mergeItem(key, obj))

	} catch (error) {
		throw new Error('Não foi possível buscar no banco de dados com a key ' + key)
	}
}


const insertString = async (key, value, callback = null) => {
	if (typeof value != 'string') {
		throw new Error('Tipo de dado não é uma string para inserir no banco!')
	}
	try {
		await AsyncStorage.setItem(key, value, callback)
	} catch (error) {
		throw new Error('Não foi possível inserir a string no banco de dados!')
	}
}

const insertObject = async (key, value, callback = null) => {
	try {
		const obj = JSON.stringify(value)
		await AsyncStorage.setItem(key, obj, callback)
	} catch (error) {
		throw new Error('Não foi possível inserir o objeto no banco de dados!')
	}
}

const read = async (key, callback = null) => {
	try {
		await AsyncStorage.getItem(key, callback)
	} catch (error) {
		throw new Error('Não foi possível buscar no banco de dados com a key ' + key)
	}
}

const readAll = async (callback = null) => {
	try {
		await AsyncStorage.getAllKeys(callback)
	} catch (error) {
		throw new Error('Não foi possível buscar todas as keys no banco de dados!')
	}
}

const clear = async (callback = null) => {
	try {
		await AsyncStorage.clear(callback)
	} catch (error) {
		throw new Error('Não foi possível apagar a base de dados!')
	}
}

export { clear }
export { insertObject }
export { insertString }
export { read }
export { readAll }
export { updateItem }
