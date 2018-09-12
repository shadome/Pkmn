'use strict'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { TouchableWithoutFeedback, ImageBackground, Image, NativeModules, StatusBar, View, ScrollView, Text, FlatList, Button } from 'react-native'
import Orientation from 'react-native-orientation'

import resolveAssetSource from 'resolveAssetSource'

import MoveIcon from '../components/MoveIcon'
import Monster from '../components/Monster'
import HealthBar from '../components/HealthBar'
import TeamMenuItem from '../components/TeamMenuItem'
import * as BattlefieldActions from '../actions/BattlefieldActions'

class BattlefieldPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //   ...this.state,
    //   p1: { id:'050', hp:0, },
    //   p2: { id:'149', hp:94, },
    //   e1: { id:'100', hp:99, },
    //   e2: { id:'151', hp:76, },
      selected: 0
    }    
  }
  componentDidMount() {
    Orientation.lockToLandscape()
  }
  componentWillUnmount() {
    Orientation.unlockAllOrientations()
  }
  render() {
    const { battlefieldData, navigation } = this.props
    const select = (index) => { this.setState({...this.state, selected:index})}
    // const inc = () => {
    //   this.setState({...this.state, 
    //     e1: {...this.state.e1, hp: this.state.selected == 3 ? this.state.e1.hp / 2 : this.state.e1.hp},
    //     e2: {...this.state.e2, hp: this.state.selected == 4 ? this.state.e2.hp / 2 : this.state.e2.hp},
    //     p1: {...this.state.p1, hp: this.state.selected == 1 ? this.state.p1.hp / 2 : this.state.p1.hp},
    //     p2: {...this.state.p2, hp: this.state.selected == 2 ? this.state.p2.hp / 2 : this.state.p2.hp},
    //   })
    // }
    const clearSelection = () => {
      this.setState({...this.state, selected: 0})
    }
    return (
      /* TODO render images as text (characters via font) for text colors if possible, or duplicate the images with a black one */
      <View style={{ flex:1, backgroundColor:'#000' }}>
        <ImageBackground style={{ flex:1, height:'100%' }} resizeMode='contain' source={require('Pkmn/resources/battlefield/backgrounds/1.png')}>
          <View style={{position:'absolute', left:0, top:0, flexDirection: 'column'}}>
            <TeamMenuItem monster={battlefieldData.party[2]}/>
            <TeamMenuItem monster={battlefieldData.party[3]}/>
            <TeamMenuItem monster={battlefieldData.party[4]}/>
            <TeamMenuItem monster={battlefieldData.party[5]}/>
          </View>
          <View style={{position:'absolute', right:0, top:0, flexDirection: 'column'}}>
            <TeamMenuItem monster={battlefieldData.enemy[0]}/>
            <TeamMenuItem monster={battlefieldData.enemy[1]}/>
            <TeamMenuItem monster={battlefieldData.enemy[2]}/>
            <TeamMenuItem monster={battlefieldData.enemy[3]}/>
            <TeamMenuItem monster={battlefieldData.enemy[4]}/>
            <TeamMenuItem monster={battlefieldData.enemy[5]}/>
          </View>
          <TouchableWithoutFeedback style={{flex:1}} onPress={clearSelection}>
            <View style={{flex:1, marginHorizontal:40}}>
              {/* <View style={{position:'absolute', right:0}}>
                <HealthBar monster={battlefieldData.enemy[0]} selected={this.state.selected == 3}/>
                <HealthBar monster={battlefieldData.enemy[1]} selected={this.state.selected == 4}/>
              </View> */}
              <View style={{flexDirection:'row', position:'absolute', bottom:80, right:0}}>
                <Monster style={{justifyContent:'flex-end', bottom:50}} monster={battlefieldData.enemy[0]} selected={this.state.selected === 3} onPress={() => select(3)}/>
                <Monster style={{justifyContent:'flex-end'}} monster={battlefieldData.enemy[1]} selected={this.state.selected === 4} onPress={() => select(4)}/>
              </View>
              {/* <View style={{position:'absolute', left:0}}>
                <HealthBar monster={battlefieldData.party[0]} selected={this.state.selected == 1}/>
                <HealthBar monster={battlefieldData.party[1]} selected={this.state.selected == 2}/>
              </View> */}
              <View style={{flexDirection:'row', position:'absolute', bottom:10, left:0}}>
                <Monster style={{justifyContent:'flex-end', bottom:50}} monster={battlefieldData.party[0]} selected={this.state.selected === 1} friendly onPress={() => select(1)}/>
                <Monster style={{justifyContent:'flex-end'}} monster={battlefieldData.party[1]} friendly selected={this.state.selected === 2} onPress={() => select(2)}/>
              </View>
            </View>
          {/* <View style={{height:100, marginHorizontal:40, borderColor:'#23456789', borderWidth:4, alignItems:'center', flexDirection:'row', justifyContent:'center'}}>
            <MoveIcon source={require('Pkmn/resources/moves/icons/0015.png')}/>
            <MoveIcon source={require('Pkmn/resources/moves/icons/0025.png')}/>
            <MoveIcon source={require('Pkmn/resources/moves/icons/0035.png')}/>
            <MoveIcon source={require('Pkmn/resources/moves/icons/0045.png')}/>
          </View> */}
            {/* <View style={{height:100,flex:1,backgroundColor:'#123', borderColor:'#321', borderWidth:5}}/>
            <View style={{height:100,flex:1,borderColor:'#123', backgroundColor:'#321', borderWidth:5}}/>
            <View style={{height:100,flex:1,backgroundColor:'#123', borderColor:'#321', borderWidth:5}}/>
            <View style={{height:100,flex:1,borderColor:'#123', backgroundColor:'#321', borderWidth:5}}/> */}
            {/* <MoveIcon source={require('Pkmn/resources/moves/icons/0050.png')}/>
            <MoveIcon source={require('Pkmn/resources/moves/icons/0060.png')}/> */}
            
            {/* <View style={{flexDirection:'row', justifyContent:'center'}}> */}
              {/* <MoveIcon name='feather-alt'/>
              <MoveIcon name='dove'/>
              <MoveIcon name='kiwi-bird'/>
              <MoveIcon name='crow'/>
              <MoveIcon name='tint'/>
              <MoveIcon name='splotch'/>
              <Text style={{ fontFamily: 'FontAwesome', fontSize: 20 }}>&#xf0a9;</Text> */}
            {/* </View> */}
            {/* <Button style={{height:'100%'}} onPress={inc} title='+'/> */}
          </TouchableWithoutFeedback>
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
