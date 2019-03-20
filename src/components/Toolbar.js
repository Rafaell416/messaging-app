import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  TextInput
} from 'react-native'

class Toolbar extends Component {
  state = { text: '' }

  _handleChangeText = text => this.setState({ text })

  _handleSubmit = () => {
    const { onSubmit } = this.props
    const { text } = this.state
    if ( !text ) return

    onSubmit( text )
    this.setState({ text: '' })
  }

  _setInputReference = ref => this.input = ref

  _handleBlur = () => null

  _handleFocus = () => null
  
  render () {
    const { text } = this.state
    return (
      <View style={styles.container}>
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
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    height: 50,
    padding: 5,
  },
  inputText: {
    flex: 1,
    fontSize: 18,
    backgroundColor: '#ecf0f1'
  }
})

export default Toolbar