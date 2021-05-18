import React from 'react'
import {
  Button,
  SafeAreaView
} from 'react-native'

import CheckBox from './componentes/CheckBox'

class App extends React.Component {

  state = {
    check01 : false
  }

  render() {
    return (
      <SafeAreaView>
        <CheckBox
          checked= { this.state.check01 } 
          onChecked={ (status) => this.setState({ check01 : status }) }
          text="Texto 01" />

        <CheckBox />
        <CheckBox text="Texto 03"/>

        <Button 
          onPress={ () => alert(this.state.check01) }
          title='Salvar'/>
      </SafeAreaView>
    )
  }
}

export default App