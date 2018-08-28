'use strict'

import React, { Component } from 'react'
import { Image, View, Text, TouchableWithoutFeedback } from 'react-native'

import HealthBar from '../components/HealthBar'

class Monster extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {monster, selected, friendly, onPress} = this.props
    const spriteEdgeSize = 144
    const selbot = require('Pkmn/resources/battlefield/selection_bot.png')
    const seltop = require('Pkmn/resources/battlefield/selection_top.png')
    return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[this.props.style, {flexDirection:'column', alignItems:'center'}]}>
        <HealthBar id={monster.id} hp={monster.hp} selected={selected}/>
        {(selected && <Image source={seltop} style={{position:'absolute', bottom:5}}/>)}
        <Image style={{width:spriteEdgeSize, height:spriteEdgeSize}}
          source={friendly ? monster.spriteBack : monster.spriteFront} 
        /> 
        {(selected && <Image source={selbot} style={{position:'absolute', bottom:5}}/>)}
      </View>
    </TouchableWithoutFeedback>
    )
  }
}
export default Monster