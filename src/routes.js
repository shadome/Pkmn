import { createStackNavigator,} from 'react-navigation'

import BattlefieldPage from './battlefield/pages/BattlefieldPage'

const AppNavigator = createStackNavigator({
    battlefieldPage: BattlefieldPage,
  }, {
    initialRouteName: 'battlefieldPage',
    headerMode: 'none',
    landscapeOnlyMode: true,
  })

export default AppNavigator
