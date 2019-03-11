import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import Header from '../components/Header'
import { Ionicons } from '@expo/vector-icons'
import PropTypes from 'prop-types'
import MessageList from '../components/MessageList'
import { createTextMessage } from '../utils/MessageUtils'

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
      createTextMessage("Hola, ¿ Qué haces ?"),
      createTextMessage("Turiano el buen amigo"),
      createTextMessage("Hola"),
      createTextMessage("Mundo"),
    ]
  }

  render () {
    return (
      <View style={styles.container}>
        <MessageList 
          messages={ this.state.messages }
          onMessagePress={() => null}
        />
      </View>
    )
  }
}

Chat.propTypes = {

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