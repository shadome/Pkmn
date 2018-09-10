import React from 'react'
import { View, Image } from 'react-native'
// import FontAwesome from 'react-native-vector-icons/FontAwesome5'

export default class MoveIcon extends React.PureComponent {
  render() {
    return (
      // <FontAwesome.Button name={this.props.name} size={48} color='#fff'/>

      <View style={{
        height: 64,
        width: 64,
        }}>
        <View style={{
          position: 'absolute',
          overflow: 'hidden',
          // marginTop:10, marginLeft:10,
          top: 2,
          left: 5,
          height: 63,
          width: 62,
          backgroundColor: 'transparent',
          borderRadius:8,
          }}>
          <View style={{
            position: 'absolute',
            top: -1, // minus crop top
            left: -1, // minus crop left
            backgroundColor: 'transparent'
          }}>
          <Image source={this.props.source}/>
        </View>
      </View>
    </View>
    )
  }
}