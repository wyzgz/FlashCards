import {RECEIVE_DECKS, ADD_NEW_CARD,ADD_NEW_DECK} from '../actions/actionTypes'

function decks(state = {}, action){
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...action.decks
      }
    case ADD_NEW_CARD:
      return {
        ...action.decks
      }
    case ADD_NEW_DECK:
      return {
        ...action.decks
      }

    default:
      return state

  }
}

export default decks
