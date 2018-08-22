import { AsyncStorage } from 'react-native'
import { Notifications, Permissions} from  'expo'

const FLASH_DECKS_KEY = 'UdaciFlashCards'
const NOTIFICATION_KEY = 'UdaciFlashCards:notifications'

export function getDecksTest(){
//  return AsyncStorage.setItem(FLASH_DECKS_KEY, JSON.stringify(decks))
}
export function clearDecks (){
  return  AsyncStorage.removeItem(FLASH_DECKS_KEY)
}
export function getDecks(){
  return AsyncStorage.getItem(FLASH_DECKS_KEY)
          .then(result =>{
            let decks = JSON.parse(result)
            return {decks}
          })
}

export function getDeck(){

}

function generateID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
export function saveDeckTitle(title){

  const id = generateID()
  const newDeck = {
    [id]:{
      id,
      title,
      questions:[],
      timestamp:Date.now(),
    }
  }

 return AsyncStorage.mergeItem(FLASH_DECKS_KEY, JSON.stringify(newDeck))
          .then(()=>{
            return AsyncStorage.getItem(FLASH_DECKS_KEY)
          })

}

 export function addCardToDeck({id,question,answer}){
   return AsyncStorage.getItem(FLASH_DECKS_KEY)
   .then(result => {
     const decks = JSON.parse(result)
     const deck = decks[id]
     const updatedDeck = {
       ...deck,
       questions:[
         ...deck.questions,
         {
           question,
           answer
         }
       ]
     }
     decks[id] = updatedDeck
     AsyncStorage.setItem(FLASH_DECKS_KEY, JSON.stringify(decks))
     return decks
  })

}


export function clearLocalNotification(){
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
  .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification(){
  return {
    title:'Note',
    body:'👋 Do not forget to study today!',
    ios:{
      sound:true,
    }
  }

}
export function setLocalNotification(){
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data)=>{
      if(data === null){
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({status})=>{
            if(status === 'granted'){
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate()+1)
              tomorrow.setHours(20)
              tomorrow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time:tomorrow,
                  repeat:'day'
                }
              )
              AsyncStorage.setItem(NOTIFICATION_KEY,JSON.stringify(true))
            }
          })
      }
    })
}
