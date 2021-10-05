import React, {
  useReducer  
} from 'react'

import {
  Button,
  SafeAreaView,
  Text,
  View
} from 'react-native'

const ACTIONS = {
  INCREMENTAR: "INCREMENTAR",
  DECREMENTAR: "DECREMENTAR",
  RESETAR: "RESETAR"
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENTAR:
      return state + 1
    case ACTIONS.DECREMENTAR:
      if (state <= 0) {
        return 0
      }
      return state - 1
    case ACTIONS.RESETAR:
      return 0
    default:
      return state
  }
}

const data = [
  {id: 'a', productName: 'Belt'},
  {id: 'b', productName: 'Blouse'},
  {id: 'c', productName: 'Handbag'},
]

const App = () => {

  const [contador, dispatch] = useReducer(reducer, 0)

  return (
    <View>
      {data.map((product) => {
        <Text>{product.productName}</Text>
      })}
    </View>
    // <SafeAreaView>
    //   <Text>Contador: {contador}</Text>
    //   <Button
    //     onPress={() => dispatch({ type: ACTIONS.INCREMENTAR })}
    //     title='Incrementar'
    //   />

    //   <Button
    //     onPress={() => dispatch({ type: ACTIONS.DECREMENTAR })}
    //     title='Decrementar'
    //   />

    //   <Button
    //     onPress={() => dispatch({ type: ACTIONS.RESETAR })}
    //     title='Zerar contador'
    //   />
    // </SafeAreaView>
  )
}

export default App