import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import Header from '../components/Header'
import { Ionicons } from '@expo/vector-icons'
import MessageList from '../components/MessageList'
import Toolbar from '../components/Toolbar'
import { 
  createTextMessage, 
  createImageMessage,
  createLocationMessage
} from '../utils/MessageUtils'

import { addMessage } from '../redux/actions'

import { connect } from 'react-redux'

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
    selectedMessages: {}
  }

  _handlePressMessage = item => {
    this.setState({
      selectedMessages: {
        [item.id]: true
      }
    })
  }

  _handleSubmitMessage = message => {
    const textMessage = createTextMessage(message)
    this.props.addMessage( textMessage )
  }

  // es5 this.state.messages.concat(createTextMessage(message))
  //es6 [createTextMessage(message), ...this.state.messages]

  render () {
    return (
      <View style={styles.container}>
        <MessageList 
          selectedMessages={ this.state.selectedMessages }
          messages={ this.props.messages }
          onMessagePress={ this._handlePressMessage }
        />
        <Toolbar 
          onSubmit={ this._handleSubmitMessage }
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

const mapStateToProps = ({ messages }) => ({
  messages
})

const mapDispatchToProps = {
  addMessage
}

export default connect( mapStateToProps, mapDispatchToProps )( Chat )