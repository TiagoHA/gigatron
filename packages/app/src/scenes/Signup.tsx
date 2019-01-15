import * as React from 'react'
import { Text, View, Platform } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'

interface Props {
  navigation: NavigationScreenProp<any, any>
}

class Signup extends React.Component<Props> {
  public static navigationOptions = {
    header: null,
  }

  public render() {

    return (
      <View style={{ flex: 1 }}>
        <Text>Signup</Text>
      </View>
    )
  }
}

export default Signup
