import { createStackNavigator } from 'react-navigation'
import HomeScreen from '../../screens/Home'

const HomeStack = createStackNavigator({
  Home: HomeScreen
})

export default HomeStack