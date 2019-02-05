import React from 'react'
import {
  View,
  Text,
  Platform,
  StyleSheet
} from 'react-native'
import { Constants } from 'expo'
import PropTypes from 'prop-types'

const HEIHGT = Platform.OS === 'ios' ? 50 : 56

function Header ({ title, leftIcon, rightIcon, children }) {
  return (
    <View>
      <View style={styles.statusBar}></View>
      <View style={styles.container}>
        <View style={styles.iconView}>
          { leftIcon }        
        </View>
        <View style={[styles.flex, styles.center]}>
          { children ? children : <Text style={styles.textStyle}>{ title }</Text> }
        </View>
        <View style={styles.iconView}>
          { rightIcon }        
        </View>
      </View>
    </View>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  children: PropTypes.element
}

const styles = StyleSheet.create({
  container: {
    height: HEIHGT,
    width: '100%',
    backgroundColor: "#927AF8",
    elevation: 5,
    flexDirection: 'row',
  },
  statusBar: {
    height: Constants.statusBarHeight,
    backgroundColor: "#927AF8"
  },
  iconView: {
    height: HEIHGT,
    width: HEIHGT,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    color: 'white',
    fontWeight: '300',
    fontSize: 18,
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Bold' : 'Roboto'
  },
  flex: {
    flex: 1
  }
})

export default Header