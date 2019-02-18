import { createStackNavigator } from 'react-navigation'
import HomeScreen from '../../screens/Home'
import ChatScreen from '../../screens/Chat'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Chat: ChatScreen
})

HomeStack.navigationOptions = ({ navigation }) => ({
  tabBarVisible: navigation.state.index > 0 ? false : true
})

export default HomeStack