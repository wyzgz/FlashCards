import React, { Component } from 'react'
import {View, Text, StyleSheet,TouchableOpacity, Platform} from 'react-native'
import { connect } from 'react-redux'

class DeckView extends Component {
  addCard = (id) => {
    const { navigation } = this.props
    navigation.navigate('AddCard',{
      id
    })
  }
  startQuiz = (id) => {
    const { navigation } = this.props
    navigation.navigate('Quiz',{id})
  }
  render() {
    const { deck } = this.props
    const { title,questions } = deck
    return (
      <View style = {styles.container}>
        <Text style = {styles.title}>{title}</Text>
        <Text style = {styles.sum}>{questions.length} cards</Text>
        <View style = {{flex:1, justifyContent:'center'}}>
          <TouchableOpacity
            style = {[styles.btn,{backgroundColor:'#fff'}]}
            onPress = {()=>this.addCard(deck.id)}
          >
            <Text style = {{fontSize:20}}>Add Card</Text>
          </TouchableOpacity>
          {questions.length >0 &&
            <TouchableOpacity
              style = {[styles.btn,{backgroundColor:'black'}]}
              onPress = {()=>this.startQuiz(deck.id)}
            >
              <Text style = {{fontSize:20,color:'white'}}>Start Quiz</Text>
            </TouchableOpacity>
          }
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    marginTop:50,
    justifyContent:'center'
  },
  title:{
    fontSize:100
  },
  sum:{
    fontSize:50,
    color:'grey'
  },
  btn:{
    borderRadius: Platform.OS === 'ios' ? 5 : 2,
    padding: 15,
    paddingHorizontal:50,
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
})

function mapStateToProps({decks},{navigation}){
  const id = navigation.getParam('id')
  return {
    deck: decks[id],
    navigation
  }
}
export default connect(mapStateToProps)(DeckView)
