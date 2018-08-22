import React, { Component } from 'react'
import {View, Text, StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import { handleAddNewDeck } from '../actions'
import { connect } from 'react-redux'
class NewDeck extends Component {
  state = {
    title:''
  }
  handleSubmit = ()=>{
    const { title } = this.state
    const { navigation,dispatch } = this.props
    dispatch(handleAddNewDeck(title))
    navigation.navigate('Home')
  }
  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.title}>
          What is the title of your new deck?
        </Text>
        <View style = {{flex:1}}>
          <TextInput
            onChangeText={(title) => this.setState({title})}
            value={this.state.title}
            placeholder='Deck Title'
            keyboardAppearance = 'dark'
            style = {styles.input}
          />
          <TouchableOpacity style = {styles.btn} onPress = {this.handleSubmit}>
            <Text style = {{color:'white',fontSize:20,fontWeight:'bold'}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'flex-start',
    marginTop:20
  },
  title:{
    fontSize:50,
    textAlign:'center',
  },
  input:{
    backgroundColor:'#fff',
    width:300,
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
    width:200,
    alignSelf:'center',
    backgroundColor:'black',
    borderRadius: 5,
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
export default connect()(NewDeck)
