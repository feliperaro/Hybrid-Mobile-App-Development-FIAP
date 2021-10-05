import AsyncStorage from '@react-native-async-storage/async-storage'

export const insertString = async(key, value, callback = null) => {
  try {
    await AsyncStorage.setItem(key, value, callback)
  } catch (error) {
    throw new Error('Não foi possívvel inserir no banco de dados!')
  }
}

export const read = async(key, callback) => {
  try {
    await AsyncStorage.getItem(key, callback)
  } catch (error) {
    throw new Error('Não foi possível ler do banco de dados!')
  }
}

export const remove = async(key, callback = null) => {
  try {
    await AsyncStorage.removeItem(key, callback)
  } catch (error) {
    throw new Error('Não foi possível remover o dado!')
  }
}

export const insertToken = (value, callback = null) => {
  insertString('token', value, callback)
} 

export const readToken = (callback = null) => {
  read('token', callback)
}

export const removeToken = (callback = null) => {
  remove('token', callback)
}
