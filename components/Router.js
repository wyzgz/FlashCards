import React, { Component } from 'react'
import {createStackNavigator,createBottomTabNavigator,createMaterialTopTabNavigator} from 'react-navigation'
import DecksView from './DecksView'
import DeckView from './DeckView'
import NewCard from './NewCard'
import Quiz from './Quiz'
import { connect } from 'react-redux'
import { handleInitialDecks} from '../actions'
import NewDeck from './NewDeck'


const Tabs = createMaterialTopTabNavigator({
  Home: DecksView,
  NewDeck:{
    screen: NewDeck,
    navigationOptions:{
      title:'New Deck'
    }
  }
},{
  navigationOptions: {
    header: null,
    initialRouteName:'Home',
    tabBarPosition:'top',
  },
  tabBarOptions: {
  activeTintColor: 'white',
  inactiveTintColor: '#fff',
  style: {
    backgroundColor: 'black',
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 4,
    shadowOpacity: 3
  },
  indicatorStyle:{
    backgroundColor: 'black'
  },
}
})

const RootStack = createStackNavigator({
      Home: {
        screen: Tabs,
        navigationOptions:{
          title: 'udacicards'
        }
      },
      DeckDetail: {
        screen:DeckView,
      },
      AddCard: {
        screen:NewCard,
        navigationOptions:{
          title:'Add Card'
        }
      },
      Quiz:{
        screen:Quiz,
        navigationOptions:{
          title:'Quiz'
        }
      }
    },
    {
      initialRouteName: 'Home',
    },
  )

class RouterHandler extends Component{
  componentDidMount(){
    const { dispatch } = this.props
    dispatch(handleInitialDecks())
  }

  render(){
    return <RootStack />
  }
}



export default connect()(RouterHandler)
