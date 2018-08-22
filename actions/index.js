import {RECEIVE_DECKS,ADD_NEW_CARD, ADD_NEW_DECK} from './actionTypes'
import { addCardToDeck, getDecks, saveDeckTitle,getDecksTest,clearDecks} from '../utils/helpers'

export function receiveDecks (decks){
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export function handleInitialDecks(){
  return (dispatch) => {
    getDecks()
    .then((decks)=> {
      dispatch(receiveDecks(decks))
    })
  }
}

export function handleAddCardToDeck(card){
  return (dispatch) => {
     addCardToDeck(card)
    .then(decks => {
      dispatch(addNewCard({decks}))
    })
  }
}

export function addNewCard (decks){
  return {
    type:ADD_NEW_CARD,
    decks
  }
}
export function addNewDeck(decks){
  return {
    type:ADD_NEW_DECK,
    decks
  }
}

export function handleAddNewDeck(title){
  return (dispatch) => {
    saveDeckTitle(title)
    .then((result)=>{
      const decks = JSON.parse(result)
      dispatch (receiveDecks({decks}))
    })
  }
}
