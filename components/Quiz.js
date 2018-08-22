import React, { Component } from 'react'
import {View, Text,TouchableOpacity, StyleSheet, Platform} from 'react-native'
import { connect } from 'react-redux'
import {FontAwesome ,Entypo} from '@expo/vector-icons'
import Card from './Card'

class Quiz extends Component {
  state = {
    id: 0,
    correct:0,
    inCorrect:0,
    finishQuiz: false
  }
  showNext = ()=>{
    const { deck } = this.props
    const { questions } = deck
    let { id } = this.state

    if(id < questions.length-1){
      this.setState((prevState)=>({
        id: prevState.id +1
      }))
    } else {
      this.setState({finishQuiz:true})
    }
  }

  correct = () =>{
    this.setState(prevState => ({
      correct: prevState.correct+1
    }))
    this.showNext()
  }
  inCorrect = () =>{
    this.setState(prevState => ({
      inCorrect: prevState.inCorrect+1
    }))
    this.showNext()
  }

  render() {
    const { deck } = this.props
    const { questions } = deck
    const { id ,finishQuiz} = this.state
    const card = questions[id]
    if(finishQuiz){
      return (
        <View style = {styles.container}>
          <Text style = {{fontSize:30}}>Your score is: </Text>
          <View style = {styles.result}>
            <FontAwesome name='check-circle' size={30} color='green' style = {styles.icon}/>
            <Text style = {{fontSize:30,color:'green'}}>{this.state.correct}</Text>
          </View>
           <View style = {styles.result}>
             <Entypo name='circle-with-cross' size={30} color='red' style = {styles.icon} />
             <Text style = {{fontSize:30,color:'red'}}>{this.state.inCorrect}</Text>
           </View>

        </View>
      )
    }
    return (
      <View style = {styles.container}>
        <View>
          <Text>{id}/{questions.length}</Text>
        </View>
        <Card card = {card} key = {id}/>
        <View style = {styles.btnView}>
          <TouchableOpacity
            style = {[styles.btn,{backgroundColor:'green'}]}
            onPress = {this.correct}
          >
            <Text style = {{fontSize:20}}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {[styles.btn,{backgroundColor:'red'}]}
            onPress = {this.inCorrect}
          >
            <Text style = {{fontSize:20}}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps({decks},{navigation}){
  const id = navigation.getParam('id')
  const deck = decks[id]
  return {
    deck,
    navigation
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:40,
    alignItems:'center'
  },
  btnView:{
    flex:0.4,
    width:300,
    marginTop:30
  },
  icon:{
    marginRight:20
  },
  result:{
    flexDirection:'row',
    marginTop:50
  },
  btn:{
    flex:1,
    backgroundColor:'#ccc',
    borderRadius: Platform.OS === 'ios' ? 5 : 2,
    padding: 5,
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

export default connect(mapStateToProps)(Quiz)
