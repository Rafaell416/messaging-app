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

  render () {
    return (
      <View style={styles.container}>

      </View>
    )
  }
}

Chat.propTypes = {

}

const styles = StyleSheet.create({
  container: {

  },
  iconView: {
    height: '100%',
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Chat