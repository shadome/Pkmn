'use strict'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ImageBackground, Image, NativeModules, StatusBar, View, ScrollView, Text, FlatList, Button } from 'react-native'
import Orientation from 'react-native-orientation'

import resolveAssetSource from 'resolveAssetSource'

import HealthBar from '../components/HealthBar'
import Monster from '../components/Monster'
import * as BattlefieldActions from '../actions/BattlefieldActions'

class BattlefieldPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      steelix: { 
        id:'208', 
        hp:100,
        spriteFront:require('Pkmn/resources/sprites/front/208.png'), 
        spriteBack:require('Pkmn/resources/sprites/back/208.png')
      },
      venusaur: { 
        id:'003', 
        hp:94,
        spriteBack:require('Pkmn/resources/sprites/back/003.png')
      },
      blastoise: { id:'009', hp:0, spriteFront:require('Pkmn/resources/sprites/front/009.png')},
      selected: 1
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
    const inc = () => {
      this.setState({...this.state, steelix: {...this.state.steelix, hp:this.state.steelix.hp / 2}})
    }
    return (
      /* TODO render images as text (characters via font) for text colors if possible, or duplicate the images with a black one */
      <View style={{ flex:1, backgroundColor:'#000' }}>
        <ImageBackground style={{ flex:1, height:'100%' }} resizeMode='contain' source={require('Pkmn/resources/battlefield/backgrounds/1.png')}>
          <View style={{flex:1, marginHorizontal:40}}>
            <View style={{flexDirection:'row', position:'absolute', top:20, right:0}}>
              <Monster style={{top:-5, right:-10}} monster={this.state.steelix} selected={this.state.selected === 3} friendly={false} onPress={() => select(3)}/>
              <Monster monster={this.state.blastoise} selected={this.state.selected === 4} friendly={false} onPress={() => select(4)}/>
            </View>
            <View style={{flexDirection:'row', position:'absolute', bottom:-20, left:0}}>
              <Monster style={{bottom:5}} monster={this.state.steelix} selected={this.state.selected === 1} friendly={true} onPress={() => select(1)}/>
              <Monster monster={this.state.venusaur} friendly={true} selected={this.state.selected === 2} onPress={() => select(2)}/>
            </View>
          </View>
          <View style={{height:100, marginHorizontal:40, borderColor:'#23456789', borderWidth:4}}>
            <View style={{flex:1}}/>
            <Button style={{height:'100%'}} onPress={inc} title='+'/>
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
