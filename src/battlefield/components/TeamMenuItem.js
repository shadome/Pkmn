'use strict'

import React, { Component } from 'react'
import { Image, View, Text, TouchableWithoutFeedback } from 'react-native'

import IMAGES from '../data/Monsters'

import HealthBar from '../components/HealthBar'

// TODO animated sprites when selected (black white gif)
class TeamMenuItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {monster} = this.props
    const iconWidth = 40
    const fillWidth = Math.round(monster.hp / 100 * iconWidth)
    const onPress = () => {}
    return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[this.props.style, {flex:1, flexDirection:'column', alignItems:'center'}]}>
        <Image source={IMAGES[monster.id].icon} style={{backgroundColor:'#ffffffaa'}}/>
        <View style={{height:10, width:iconWidth, backgroundColor:'#888888'}}>
          <View style={{backgroundColor:'#3b5998', width:fillWidth, flex:1}}/>
        </View>
      </View>
    </TouchableWithoutFeedback>
    )
  }
}
export default TeamMenuItem