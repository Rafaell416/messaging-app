import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native'
import moment from 'moment'
import PropTypes from 'prop-types'
import { MapView } from 'expo'
import { messageShape } from '../utils/MessageUtils'

class MessageList extends Component {
  state = {
    selectedMessages: {}
  }

  _keyExtractor = item => item.id.toString() 

  _renderItem = ({ item, index }) => {
    const { onMessagePress } = this.props 
    return (
      <View style={styles.messageRow}>
        <TouchableOpacity key={ item.id } onPress={() => this._handlePressMessage( item )}>
          { this._renderMessageBody({ item, index }) }
        </TouchableOpacity>
      </View>
    )
  }

  _handlePressMessage = item => {
    this.setState({
      selectedMessages: {
        ...this.state.selectedMessages,
        [item.id]: true
      }
    })
  }

  _renderDateText = item => {
    const { selectedMessages } = this.state
    const selected = selectedMessages[item.id]
    if ( selected ) {
      return (
        <View style={styles.dateView}>
          <Text style={styles.dateText}>{moment(item.date).format('LT')}</Text>
        </View>
      )
    } else {
      return null
    }
  }

  _renderMessageBody = ({ item, index  }) => {
    const { type, text, id, uri, coordinate, date } = item
    switch ( type ) {
      case 'text':
        const { messages } = this.props
        const firstIndex = 0 
        const lastIndex = messages.length - 1
        return (
          <React.Fragment>
            <View 
              style={[
                styles.messageBubble, 
                index === firstIndex 
                  ? styles.firstBubble : ( index === lastIndex ) ? styles.lastBubble : styles.middleBubble
              ]}
            >
              <Text style={styles.text}>{ text }</Text>
            </View>
            {this._renderDateText(item)}
          </React.Fragment>
        )
      case 'image':
        return (
          <React.Fragment>
            <Image source={{ uri }} style={styles.image}/>
            {this._renderDateText(item)}
          </React.Fragment>
        )

      case 'location':
        return (
          <React.Fragment>
            <MapView 
              initialRegion={{
                ...coordinate,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              style={styles.map}
            >
              <MapView.Marker 
                coordinate={ coordinate }
                title="La Arenosa"
              />
            </MapView>
            {this._renderDateText(item)}
          </React.Fragment>
        )
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
        extraData={ this.state }
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
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 15
  },
  map: {
    height: 200,
    width: 200,
    borderRadius: 15
  },
  dateView: {
    width: '100%',
    alignItems: 'flex-end',
    paddingRight: 5,
    paddingVertical: 2
  },
  dateText: {
    color: '#34495e',
    fontSize: 14
  }
})

export default MessageList