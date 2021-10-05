import React, {
  useEffect,
  useState
} from "react";
import {
  FlatList,
  View,
  Text,
  Alert,
  RefreshControl,
} from 'react-native'

import {
  SpeedDial,
} from 'react-native-elements'

import ListLivroItem from "../ListLivroItem";

import jwtDecode from "jwt-decode";

import { readToken, removeToken } from "../../database/DB";

import { getLivros } from "../../services/LivroService";

const Home = (props) => {

  const [open, setOpen] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [token, setToken] = useState('')
  const [livros, setLivros] = useState([])
  const [isRefreshing, setIsRefreshing] = useState(false)

  const sair = () => {
    removeToken(() => {
      props.navigation.reset({
        index: 0,
        routes: [{
          name: 'login'
        }]
      })
    })
  }

  const add = () => {
    setOpen(false)
    props.navigation.navigate('cadastroLivros', { token })
  }

  const abrirDescricaoLivro = (livro) => {
    props.navigation.navigate('descricaoLivro', { livro, isAdmin, token})
  }

  const getInitialData = (jwt) => {
    setIsRefreshing(true)
    getLivros(jwt)
      .then((response) => setLivros(response.data))
      .catch(() => Alert.alert('Erro', 'Não foi possível recuperar os dados da API'))
      .finally(() => setIsRefreshing(false))
  }

  useEffect(() => {
    readToken((error, success) => {
      if (!error && success && success.trim().length > 0) {
        const payload = jwtDecode(success)
        setIsAdmin(payload.admin)

        setToken(success)
        getInitialData(success)
      }
    })
  }, [])

  return (
    <View style={{ flex: 1, padding: 16 }}>

      {livros.length === 0 && (
        <Text style={{ textAlign: 'center' }}>
          Não há livros para serem exibidos!
        </Text>
      )}

      <FlatList
        data={livros}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => (
          <ListLivroItem 
            livro={item}
            onPress={() => abrirDescricaoLivro(item)}
          />
        )}
        refreshControl={
          <RefreshControl
            onRefresh={() => getInitialData(token)}
            refreshing={isRefreshing}
          />
        }
      />

      <SpeedDial
        isOpen={open}
        icon={{ name: 'edit', color: '#fff' }}
        openIcon={{ name: 'close', color: '#fff' }}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}
      >

        {isAdmin && (
          <SpeedDial.Action
            icon={{ name: 'add', color: '#fff', }}
            title="Add"
            onPress={() => add()}
          />
        )}

        <SpeedDial.Action
          icon={{ name: 'sign-out-alt', color: '#fff', type: 'font-awesome-5', }}
          title="Sair"
          onPress={() => sair()}
        />
      </SpeedDial>
    </View>
  )
}

export default Home