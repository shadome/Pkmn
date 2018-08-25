'use strict'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ImageBackground, Image, NativeModules, StatusBar, View, ScrollView, Text, FlatList, Button } from 'react-native'
import Orientation from 'react-native-orientation'

import resolveAssetSource from 'resolveAssetSource'

import HealthBar from '../components/HealthBar'
import * as BattlefieldActions from '../actions/BattlefieldActions'
// import {COLOR, ThemeProvider, ListItem, Checkbox, Button, Toolbar, Icon, ActionButton, BottomNavigation, withTheme} from '../components/react-native-material-ui';
// import * as DailyMealActions from '../actions/DailyMealActions';
// import DailyMealBusiness from '../business/DailyMealBusiness';

// import MainBottomNavigationBar from '../fragments/MainBottomNavigationBarFragment'

class BattlefieldPage extends Component {
  constructor(props) {
    super(props);
    // this.currentKey = DailyMealBusiness.getIdFromDate(new Date());
    this.state = { val: 50}
  }
  componentDidMount() {
    Orientation.lockToLandscape()
  }
  componentWillUnmount() {
    Orientation.unlockAllOrientations()
  }
  render() {
    const { battlefieldData, navigation } = this.props
    const p002 = require('Pkmn/resources/sprites/back/002.png')
    const p003 = require('Pkmn/resources/sprites/back/003.png')
    const p009 = require('Pkmn/resources/sprites/front/009.png')
    const p008 = require('Pkmn/resources/sprites/front/008.png')
    return (
      <View style={{ flex:1, backgroundColor:'#000' }}>
        <ImageBackground style={{ flex:1, width:null }} resizeMode='contain' source={require('Pkmn/resources/battlefield/backgrounds/1.png')}>
          <View style={{flexDirection:'row'}}>
          <View style={{flexDirection:'column'}}>
          <HealthBar pkmn='002' value={this.state.val}/>
          <View style={{height:30, borderColor:'#123456', borderWidth:4, width:200}}/>
          <HealthBar pkmn='003' value={this.state.val}/>
          <View style={{height:30, borderColor:'#123456', borderWidth:4, width:200}}/>
          </View>
          <View style={{flex:1}}/>
          <Image source={p008} style={{width:144, height:144, borderColor:'#23456789', borderWidth:4}}/>
          <Image source={p009} style={{width:144, height:144, borderColor:'#23456789', borderWidth:4, marginTop:10}}/>
          <View style={{width:40}}/>
          </View> 
          {/* <View style={{ flex:1 }}/> */}
          <View style={{flexDirection:'row'}}>
            <View style={{width:40}}/>
            <Image source={p003} style={{width:144, height:144, borderColor:'#23456789', borderWidth:4}}/>
            <Image source={p002} style={{width:144, height:144, borderColor:'#23456789', borderWidth:4, marginTop:10}}/>
          </View>
          <View style={{height:100, width:600, flex:1, borderColor:'#23456789', borderWidth:4, position:'absolute', bottom:0, left:0}}>
            <Button onPress={() => {this.setState(...this.state, {val: 5})}} title='+'/>
          </View>
        </ImageBackground>
      </View>
    )
    // const {dailyMealData, dailyMealActions, navigation, theme,} = this.props;
    // const key = this.currentKey;
    // this.currentKey = DailyMealBusiness.getIdFromDate(new Date());
    // const list = (dailyMealData.dailyMealHistory[key]) ? dailyMealData.dailyMealHistory[key] : [];
    // const energy = (item) => (item.energyPct * item.quantity / item.unitAmount).toFixed(0);
    // const listItemLeftElement = <Icon name='alarm'/>;
    // const listItemRightElement = (item) => <Text>{energy(item)} kcal</Text>;
    // const listItem = (item, index) =>
    //   <ListItem divider dense 
    //     //onLongPress={() => dailyMealActions.remove(key, index)}
    //     onLongPress={() => dailyMealActions.trigger(DailyMealActions.REMOVE, key, index)}
    //     centerElement={{primaryText:item.name, secondaryText:item.quantity + item.unit,}}
    //     leftElement={listItemLeftElement} rightElement={listItemRightElement(item)} 
    //   />;
        /* <Toolbar centerElement={'Daily meals [' + list.reduce((x, y) => x + parseInt(energy(y)), 0) + ']'}/>
        <ScrollView style={{flex:1}}>
          <FlatList
            data={list}
            keyExtractor={(item,index) => index.toString()}
            renderItem={({item, index}) => listItem(item, index)}
            ListFooterElement={<ListItem divider dense/>}
          />
        </ScrollView>
        <MainBottomNavigationBar navigation={navigation} index='0'/> */
  /* <Text>{dailyMealData.toto}</Text>
        <ActionButton onPress={() => navigation.navigate('add_daily_meal_page')}/> 
        <BottomNavigation 
          active={'0'}
          style={{ container: { position: 'absolute', bottom: 0, left: 0, right: 0 } }}
        >
          <BottomNavigation.Action key='0' label="Today"
            icon={<Icon name="event-available" />}
          />
          <BottomNavigation.Action key='1' label="Add food" icon="create"
            onPress={() => navigation.navigate('add_daily_meal_page')}
          />
          <BottomNavigation.Action key='2' icon="event-note" label="Calendar"
            onPress={() => null}
          />
        </BottomNavigation>*/
  }
}

export default connect(
  state => ({
    battlefieldData: state.battlefieldReducer,
  }),
  (dispatch) => ({
    battlefieldActions: bindActionCreators(BattlefieldActions, dispatch),
  })
)(BattlefieldPage)
// )(withTheme(BattlefieldPage));
