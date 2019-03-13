import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import Header from '../components/Header'
import { Ionicons } from '@expo/vector-icons'
import MessageList from '../components/MessageList'
import { 
  createTextMessage, 
  createImageMessage,
  createLocationMessage
} from '../utils/MessageUtils'

class Chat extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header 
        title={ navigation.state.params.chat.username }
        leftIcon={
          <TouchableOpacity onPress={() => navigation.goBack() } style={styles.iconView}>
            <Ionicons name="ios-arrow-back" color="white" size={25} />
          </TouchableOpacity>
        }
      />
    )
  })  

  state = {
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
    ],
    selectedMessages: {}
  }

  _handlePressMessage = item => {
    this.setState({
      selectedMessages: {
        [item.id]: true
      }
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <MessageList 
          selectedMessages={ this.state.selectedMessages }
          messages={ this.state.messages }
          onMessagePress={ this._handlePressMessage }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  iconView: {
    height: '100%',
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Chat