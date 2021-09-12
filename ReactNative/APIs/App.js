import React, {
  useEffect,
  useState
}from 'react'

import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native'

const App = () => {

  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://swapi.dev/api/films/')
      .then((response) => response.json())
      .then((json) => {
        console.log( json )
        setFilmes( json.results )
        setLoading( false )
      })
  }, [])

  return (
    <SafeAreaView style={{ flex : 1 }}>
      { loading && (
        <View style={ styles.loading }>
          <ActivityIndicator size={ 120 } />
        </View>
      )}

      { !loading && (
        <FlatList 
          data={ filmes }
          keyExtractor={ (item) => item.episode_id }
          renderItem={ ({item}) => (
            <View style={ styles.itemList }>
                          
              <Text style={ styles.tituloFilme }>
                { item.title }
              </Text>

              <Text numberOfLines={ 2 }>
                { item.opening_crawl }
              </Text>
            </View>
          )}
        />
      )}

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  loading : { 
    flex : 1, justifyContent : 'center' 
  },
  itemList : {
    backgroundColor : '#eee', 
    borderBottomColor : '#999', 
    borderBottomWidth : 3, 
    padding : 16 
  },
  tituloFilme : { 
    fontSize : 20, fontWeight : 'bold' 
  }
})

export default App