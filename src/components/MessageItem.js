import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'
import moment from 'moment'

function MessageItem ({ avatar, id, username, lastMessages, date }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatarView}>
          <Image source={{ uri: avatar }} fadeDuratio={0} style={styles.avatar}/>
        </View>
      </View>
      <View style={[styles.messageContainer, styles.flex]}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.lastMessage}>{lastMessages[0]}</Text>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{moment(date).format('LT')}</Text>
        <View style={styles.messageIndicatorView}>
          <Text style={styles.messagesNumber}>{ lastMessages.length }</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

MessageItem.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  lastMessages: PropTypes.array
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    backgroundColor: 'white',
    borderBottomWidth: .5,
    borderBottomColor: '#ecf0f1',
    flexDirection: 'row'
  },
  avatarContainer: {
    height: '100%',
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  avatarView: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    overflow: 'hidden'
  },
  avatar: {
    height: '100%',
    width: '100%'
  },
  flex: {
    flex: 1
  },
  messageContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingLeft: 8
  },
  dateContainer: {
    height: '100%',
    width: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  date: {
    color: '#bdc3c7',
    fontSize: 10
  },
  username: {
    fontWeight: 'bold'
  },
  messageIndicatorView: {
    backgroundColor: '#403DFE',
    height: 20,
    width: 20,
    borderRadius: 20 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5
  },
  messagesNumber: {
    color: 'white',
    fontSize: 10
  }
})

export default MessageItem