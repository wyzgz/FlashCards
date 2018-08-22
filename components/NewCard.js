import React, { Component } from 'react'
import { View, Text, TextInput,StyleSheet, TouchableOpacity, Platform} from 'react-native'
import {addCardToDeck,getDecks} from '../utils/helpers'
import { connect } from 'react-redux'
import { handleAddCardToDeck } from '../actions'
class NewCard extends Component {
  state = {
    question:'',
    answer:''
  }

  handleSubmit = () => {
    const {question,answer} = this.state
    const {navigation} = this.props
    const id = navigation.getParam('id')
    if(question !== '' && answer !== ''){
      return this.saveCard({
        id,
        question,
        answer
      })
    }
  }
  saveCard = ({id,question,answer})=>{
    const {navigation,dispatch} = this.props
    dispatch(handleAddCardToDeck({
      id,
      question,
      answer
    }))
    navigation.goBack()
  }
  render() {
    return (
      <View style = {{flex:1,alignItems:'center'}}>
        <TextInput
          onChangeText={(question) => this.setState({question})}
          value={this.state.question}
          placeholder='Please enter your question'
          keyboardAppearance = 'dark'
          style = {styles.input}
        />
        <TextInput
          onChangeText={(answer) => this.setState({answer})}
          value={this.state.answer}
          placeholder = {'Please enter the answer'}
          keyboardAppearance = 'dark'
          style = {styles.input}
        />
        <TouchableOpacity style = {styles.btn} onPress = {this.handleSubmit}>
          <Text style = {{color:'white',fontSize:20,fontWeight:'bold'}}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  input:{
    backgroundColor:'#fff',
    height: 50,
    marginRight:10,
    marginLeft:10,
    marginTop:20,
    fontSize:20,
    padding:5,
    borderRadius:5,
    alignSelf:'stretch'
  },
  btn:{
    backgroundColor:'black',
    borderRadius: Platform.OS === 'ios' ? 5 : 2,
    padding: 15,
    paddingHorizontal:20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
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
export default connect()(NewCard)
