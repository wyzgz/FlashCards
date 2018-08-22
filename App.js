import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import DecksView from './components/DecksView'
import RouterHandler from './components/Router'
import reducer from './reducers'
import middleware from './middleware'
import { setLocalNotification } from './utils/helpers'

export default class App extends React.Component {
  componentDidMount(){
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={createStore(reducer,middleware)}>
        <View style={styles.container}>
          <RouterHandler />
        </View>
      </Provider>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
