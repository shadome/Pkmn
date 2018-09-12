'use strict'

import * as types from '../actions/BattlefieldActions'
// import DailyMealBusiness from '../business/DailyMealBusiness'

const initialState = {
  party: [
    { id:'050', hp:2, },
    { id:'149', hp:94, },
    { id:'100', hp:99, },
    { id:'151', hp:76, },
    { id:'077', hp:51, },
    { id:'138', hp:49, },
  ],
  enemy: [
    { id:'095', hp:2, },
    { id:'142', hp:94, },
    { id:'130', hp:99, },
    { id:'123', hp:76, },
    { id:'119', hp:51, },
    { id:'107', hp:49, },
  ],
  selected: 0,
  // dailyMealHistory: {},
  // toto:'toto',
  // toto:DailyMealBusiness.getIdFromDate(new Date()),
  // dailyMealHistory: {[DailyMealBusiness.getIdFromDate(new Date())]: [
  //     {name: 'Banana', quantity: 200, unit: 'g', energyPct: 77, unitAmount:100}, 
  //     {name: 'Banana', quantity: 200, unit: 'g', energyPct: 77, unitAmount:100}, 
  //     {name: 'Banana', quantity: 200, unit: 'g', energyPct: 77, unitAmount:100}, 
  //   ]},
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SELECT: {
      return { ...state,
        selected: action.x[0],
      }
    }
    default: 
      return state
  }
  // if (action.type === types.ADD) { // x[0]:key x[1]:meal_element
  //   let tmp = state.dailyMealHistory[action.x[0]] ? [...(state.dailyMealHistory[action.x[0]]), action.x[1]] : [action.x[1]]
  //   return {
  //     ...state,
  //     dailyMealHistory: {
  //       ...(state.dailyMealHistory), 
  //       [action.x[0]]: tmp,
  //     },
  //   }
  // }
  // if (action.type === types.REMOVE) { // x[0]:key x[1]:index
  //   let tmp = [...(state.dailyMealHistory[action.x[0]].slice(0, action.x[1])), ...(state.dailyMealHistory[action.x[0]].slice(1 + action.x[1]))]
  //   // state.dailyMealHistory[action.x[0]] = state.dailyMealHistory[action.x[0]].splice(0)
  //   // state.dailyMealHistory[action.x[0]].splice(action.x[1], 1)
  //   return {
  //     ...state,
  //     dailyMealHistory: {
  //       ...(state.dailyMealHistory), 
  //       [action.x[0]]: tmp,
  //     },
  //   }
  // }
  return state
}