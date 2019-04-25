import { combineReducers } from 'redux'

import itemListReducer from './itemListReducer'

export let rootReducer = (state = {}, action) => {
  return combineReducers({
    itemListReducer
  })(state, action);
} ;
