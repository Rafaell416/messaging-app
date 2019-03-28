'use strict'

import { 
  createTextMessage, 
  createImageMessage,
  createLocationMessage
} from '../utils/MessageUtils'

const initialState = { 
  messages: [
    createTextMessage("Hola, ¿Qué haces?"),
    createTextMessage("Turiano el buen amigo"),
    createImageMessage('https://www.tesla.com/sites/default/files/images/roadster/roadster-social.jpg'),
    createTextMessage("Hola"),
    createTextMessage("Mundo"),
    createLocationMessage({
      latitude: 10.9685400,
      longitude: -74.7813200,
    })
  ]
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [ action.message, ...state.messages ]
      }
    default:
      return state
  }
}

export default reducer