import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types'
import { MapView } from 'expo'
import { messageShape } from '../utils/MessageUtils'

class MessageList extends Component {

  _keyExtractor = item => item.id.toString() 

  _renderItem = ({ item, index }) => {
    const { onMessagePress } = this.props 
    return (
      <View style={styles.messageRow}>
        <TouchableOpacity key={ item.id } onPress={() => onMessagePress( item )}>
          { this._renderMessageBody({ item, index }) }
        </TouchableOpacity>
      </View>
    )
  }

  _renderMessageBody = ({ item, index  }) => {
    const { type, text, id, uri, coordinate, } = item
    switch ( type ) {
      case 'text':
        const { messages } = this.props
        const firstIndex = 0 
        const lastIndex = messages.length - 1
        if ( index === firstIndex ) {
          return (
            <View style={[styles.messageBubble, styles.firstBubble]}>
              <Text style={styles.text}>{ text }</Text>
            </View>
          )
        } else if ( index === lastIndex ) {
          return (
            <View style={[styles.messageBubble, styles.lastBubble]}>
              <Text style={styles.text}>{ text }</Text>
            </View>
          )
        } else {
          return (
            <View style={[styles.messageBubble, styles.middleBubble]}>
              <Text style={styles.text}>{ text }</Text>
            </View>
          )
        }

      case 'image':
        return null
        // tu abuela 

      case 'location':
        return null
        // tu mae 

      default:
        return null
    }
  }

  render () {
    const { messages } = this.props
    return (
      <FlatList
        style={ styles.container }
        data={ messages }
        inverted
        keyExtractor={ this._keyExtractor }
        renderItem={ this._renderItem }
        keyboardShouldPersistTaps={'handled'}
      />
    )
  }
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(messageShape).isRequired,
  onMessagePress: PropTypes.func
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'visible'
  },
  messageRow: {
    flexDirection: 'row',
    marginBottom: 4,
    justifyContent: 'flex-end',
    marginRight: 10,
    marginLeft: 60,
  },
  messageBubble: {
    backgroundColor: '#3498db',
    padding: 10,
  },
  text: {
    color: 'white',
    fontSize: 18
  },
  firstBubble: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  middleBubble: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20
  },
  lastBubble: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20
  }
})

export default MessageList