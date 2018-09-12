'use strict'

import React, { Component } from 'react'
import { Image, StyleSheet, Text, View, Animated, Easing, } from 'react-native'

import IMAGES from '../data/Monsters'

class ProgressBar extends Component {
  constructor(props) {
    super(props)
    this.state = { value:this.props.monster.hp, progress: new Animated.Value(this.props.monster.hp >= 0 && this.props.monster.hp <= 100 ? this.props.monster.hp : 100) }
    this.state.progress.addListener(({value}) => this.setState({ ...this.state, value:value.toFixed(0)}))
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.monster.hp >= 0 && this.props.monster.hp !== nextProps.monster.hp) {
      Animated.timing(this.state.progress, {
        easing: Easing.inOut(Easing.ease),//this.props.easing,
        duration: 1000,//this.props.easingDuration,
        toValue: nextProps.monster.hp
      }).start();
    }
  }
  render() {
    const {monster, selected, icon, text} = this.props
    const borderColour = '#000'
    const barWidth = 102
    const selectedStyle = {borderColor:'#2299ff'}//, borderWidth:2, height:34}
    let fillWidth = this.state.progress.interpolate({
      inputRange: [0, 100],
      outputRange: [0, barWidth],
    })
    return (
      <View style={[this.props.style, {flexDirection:'row', height:icon?34:20, borderWidth:2, borderColor:'transparent'}, ]}> 
      {/*selected && selectedStyle*/}
        {icon && <Image source={IMAGES[monster.id].icon} style={{backgroundColor:'#ffffffaa', borderRadius:0, borderWidth:1, borderRightWidth:0, borderColor:borderColour}}/>}
        <View style={{width:barWidth+2, backgroundColor:'#888888', borderWidth:1, borderColor:borderColour}}>
          <View style={{flex:1}}>
            <Animated.View style={{backgroundColor:'#3b5998', width:fillWidth, flex:1}}/>
            {/* <View style={{height:'100%', width:'100%', position:'absolute', justifyContent:'center'}}>
               <Text style={{textAlign:'center', color:'#ffffff', fontSize:10, fontWeight:'bold'}}>{this.state.value}%</Text>
            </View> */}
            {/* <View style={{flexDirection:'row', width:'100%', height:'100%', position:'absolute'}}>
              <View style={{flex:1}}/>
              <View style={{borderColor:borderColour, borderRightWidth:1}}/>
              <View style={{flex:1}}/>
              <View style={{borderColor:borderColour, borderRightWidth:1}}/>
              <View style={{flex:1}}/>
              <View style={{borderColor:borderColour, borderRightWidth:1}}/>
              <View style={{flex:1}}/>
              <View style={{borderColor:borderColour, borderRightWidth:1}}/>
              <View style={{flex:1}}/>
            </View> */}
          </View>
          {/* <View style={{flex:1, borderTopWidth:1, borderColor:borderColour}}>
            <Animated.View style={{backgroundColor:'#559955', width:'80%', height:15}}/>
            <View style={{flexDirection:'row', position:'absolute'}}>
              <View style={{flex:1}}/>
              <View style={{borderColor:borderColour, borderRightWidth:1, height:15}}/>
              <View style={{flex:1}}/>
              <View style={{borderColor:borderColour, borderRightWidth:1, height:15}}/>
              <View style={{flex:1}}/>
              <View style={{borderColor:borderColour, borderRightWidth:1, height:15}}/>
              <View style={{flex:1}}/>
              <View style={{borderColor:borderColour, borderRightWidth:1, height:15}}/>
              <View style={{flex:1}}/>
            </View>
          </View> */}
        </View>
      </View>
    )
  }
}

export default ProgressBar