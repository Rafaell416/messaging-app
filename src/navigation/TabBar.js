import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import HomeStack from './stacks/HomeStack'
import NotificationsScreen from '../screens/Notifications'
import ProfileScreen from '../screens/Profile'
import { Ionicons } from '@expo/vector-icons'

const Tabs = createBottomTabNavigator({
  Home: HomeStack,
  Notifications: NotificationsScreen,
  Profile: ProfileScreen
},{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Home') {
        iconName = `ios-home${focused ? '' : ''}`
      } else if (routeName === 'Notifications') {
        iconName = `ios-notifications${focused ? '' : ''}`
      } else if ( routeName === 'Profile' ) {
        iconName = `ios-contact${focused ? '' : ''}`
      }
      return <IconComponent name={iconName} size={25} color={tintColor} />
    }
  }),
  tabBarOptions: {
    activeTintColor: '#5855FD',
    inactiveTintColor: '#DBDAD9',
  },
})

const TabBar = createAppContainer( Tabs )

export default TabBar


