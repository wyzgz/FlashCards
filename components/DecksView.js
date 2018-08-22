import React, { Component } from 'react'
import {View,Text,StyleSheet,FlatList,TouchableOpacity,Platform} from 'react-native'
import { getDecksTest } from '../utils/helpers'
import { handleInitialDecks } from '../actions'
import { connect } from 'react-redux'

class DecksView extends Component {
  _keyExtractor = (item) => item.id

  showDeck = (id) => {
    this.props.navigation.navigate('DeckDetail',{id})
  }
   toAddNewDeck = ()=>{
     this.props.navigation.navigate('NewDeck')
   }

  render() {
    const { decks,loading } = this.props
    if(loading){
      return (
        <View style = {{marginTop:50,flex:1, alignItems:'center'}}>
          <Text style = {{fontSize:50}}>No Deck</Text>
          <TouchableOpacity onPress = {this.toAddNewDeck} >
            <Text style = {{fontSize:20,color:'blue'}}>Create a new Deck</Text>
          </TouchableOpacity>
        </View>
      )

    }
    return (
        <FlatList
          data = {decks}
          keyExtractor = {this._keyExtractor}
          renderItem = {({item})=>(
            <ShowDeckSummary item = {item} onPress = {this.showDeck}/>
          )}
        />
    )
  }
}


function ShowDeckSummary({item,onPress}){
  const {title, questions} = item
  return (
    <View style = {[styles.container]}>
      <TouchableOpacity
        style = {styles.deck}
        onPress = {()=> onPress(item.id)}
      >
        <Text style = {styles.deckTitle}>{title}</Text>
        <Text >{questions.length} cards</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    marginTop:50,
  },
  deck:{
    backgroundColor: '#fff',
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems:'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },

  },
  deckTitle:{
    fontSize:30
  }
})


function mapStateToProps(state){
  const { decks } = state
  let values = []
  if(decks !== null && decks !== undefined){
    values = Object.values(decks)
    values.sort((a,b)=> a.timestamp < b.timestamp )
  }
  return {
    decks:values,
    loading: decks === null || decks === undefined
  }
}
export default connect(mapStateToProps)(DecksView)
