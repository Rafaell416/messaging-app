'use strict'
import PropTypes from 'prop-types'

export const messageShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['text', 'image', 'location']),
  text: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  uri: PropTypes.string,
  coordinate: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  })
})

let messageId = 0
export const getNextId = () => messageId += 1

export const createTextMessage = text => {
  return {
    id: getNextId(),
    type: 'text',
    date: new Date(),
    text
  }
}

export const createImageMessage = uri => {
  return {
    id: getNextId(),
    type: 'image',
    date: new Date(),
    uri
  }
}

export const createLocationMessage = coordinate => {
  return {
    id: getNextId(),
    type: 'location',
    date: new Date(),
    coordinate
  }
}