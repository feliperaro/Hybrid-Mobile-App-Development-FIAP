import React, {
  useEffect,
  useState
} from "react"
import {
  Button,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  View
} from 'react-native'

const API_URL = 'http://10.0.2.2:3000/'

const App = () => {

  const [mensagens, setMensagens] = useState([])
  const [frase, setFrase] = useState('')

  const recuperaMensagensAPI = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => setMensagens(json))
  }

  const enviaFraseAPI = () => {

    if (frase.length === 0) {
      alert('Envie uma frase motivacional')
      return
    }

    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    fetch(API_URL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        mensagem: frase
      })
    }).then(() => {
      setFrase('')
      recuperaMensagensAPI()
    })
  }

  const limpaAPI = () => {
    fetch(API_URL, {
      method : 'DELETE'
    }).then(() => setMensagens([]))
  }

  useEffect(() => {
    recuperaMensagensAPI()
  }, [])

  return (
    <SafeAreaView style={{ padding: 16 }}>
      <View style={{ backgroundColor: '#EEE', padding: 16 }}>
        <TextInput
          onChangeText={(txt) => setFrase(txt)}
          placeholder='Digite sua frase motivacional'
          style={{
            borderBottomColor: '#999',
            borderBottomWidth: 3,
            marginBottom: 8
          }}
          value={frase} />

        <Button
          title='Salvar'
          onPress={() => enviaFraseAPI()}
        />

        <Button
          title='Limpar banco de dados'
          onPress={() => limpaAPI()}
        />
      </View>

      <FlatList
        data={mensagens}
        keyExtractor={(item) => Math.random() * 10000000000}
        renderItem={({ item }) => (
          <Text>{item}</Text>
        )} />

    </SafeAreaView>
  )
}

export default App