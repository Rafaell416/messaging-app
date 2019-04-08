import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import ActionSheet from 'react-native-actionsheet'
import { ImagePicker, Permissions } from 'expo'
 
class Toolbar extends Component {
  state = { text: '' }

  _handleChangeText = text => this.setState({ text })

  _handleSubmit = () => {
    const { onSubmit } = this.props
    const { text } = this.state
    if ( !text ) return

    onSubmit({ type: 'text', message: text })
    this.setState({ text: '' })
  }

  _setInputReference = ref => this.input = ref

  _handleBlur = () => null

  _handleFocus = () => null

  _handleOpenPhotoLibrary = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if ( status !== 'granted' ) {
      Alert.alert('Warning', 'You have to accept permissions to access your photos.')
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({ allowsEditing: true })
      const image = result.uri
      this.props.onSubmit({ type: 'image', message: image })
    }
  }
  
  render () {
    const { text } = this.state
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.iconView} onPress={() => this.ActionSheet.show()}>
          <Feather name="paperclip" size={ 20 } color="#2c3e50"/>
        </TouchableOpacity>
        <TextInput 
          style={styles.inputText} 
          underlineColorAndroid="transparent"
          placeholder="Type something"
          blurOnSubmit={ false }
          value={ text }
          onChangeText={ this._handleChangeText }
          ref={ this._setInputReference }
          onSubmitEditing={ this._handleSubmit }
          onFocus={ this._handleFocus }
          onBlur={ this._handleBlur }
        />
        <ActionSheet
          ref={o => this.ActionSheet = o}
          title=""
          options={['Camera', 'Photo Library', 'Cancel']}
          cancelButtonIndex={2}
          onPress={(index) => {
            if ( index === 0 ) {
              // open camera
            } else if ( index === 1 ) {
              this._handleOpenPhotoLibrary()
            }
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    padding: 5,
  },
  inputText: {
    flex: 1,
    fontSize: 18,
    backgroundColor: '#ecf0f1'
  },
  iconView: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  }
})

export default Toolbar