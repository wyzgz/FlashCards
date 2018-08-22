import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Animated

} from 'react-native'


class Card extends Component {
  state = {
    value:0
  }

  animatedValue = new Animated.Value(0)

  frontInterpolate = this.animatedValue.interpolate({
    inputRange :[0,180],
    outputRange: ['0deg','180deg']
  })

  backInterpolate = this.animatedValue.interpolate({
    inputRange:[0,180],
    outputRange: ['180deg','360deg']
  })

  flipCard = ()=> {
    const { value } = this.state
    if(value >= 90){
      Animated.timing(this.animatedValue,{
        toValue:0,
        duration:800
      }).start()
      this.setState({value:0})
    } else {
      Animated.timing(this.animatedValue,{
        toValue:180,
        duration:800
      }).start()
      this.setState({value:180})
    }
  }

  render(){
    const { card } = this.props
    const frontAnimatedStyle = {
      transform:[
        {rotateX: this.frontInterpolate}
      ]
    }
    const backAnimatedStyle = {
      transform:[
        {rotateX: this.backInterpolate}
      ]
    }
    return (
      <View>
        <Animated.View style = {[frontAnimatedStyle,styles.face]}>
          <TouchableOpacity style = {[styles.card]} onPress = {this.flipCard}>
            <Text style = {styles.cardHeader}>Question:</Text>
            <Text style = {{fontSize:20}}>{card.question}</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style = {[backAnimatedStyle,styles.back]}>
          <TouchableOpacity style = {[styles.card]} onPress = {this.flipCard}>
            <Text style = {styles.cardHeader}>Answer:</Text>
            <Text style = {{fontSize:20}}>{card.answer}</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardHeader:{
    fontSize:40,
    position:'absolute',
    top:0,
    marginTop:20
  },
  card:{
    flex:1,
    width:350,
    height:300,
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
  face:{
    height:300,
    backfaceVisibility:'hidden',
    alignItems:'center',
    justifyContent:'center',
  },
  back:{
    height:300,
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    top:0,
    backfaceVisibility:'hidden'
  }
})
export default Card
