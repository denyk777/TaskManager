import * as types from "../actions/itemList/actionTypes"
import {ADD_TODO} from "../actions/itemList/actionTypes";

const initialState = {
  itemList: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ITEM_LIST_SUCCESS: {
      return {
        ...state,
        itemList: action.itemList,
        error: null,
      }
    }
    case types.GET_ITEM_LIST_ERROR: {
      return {
        ...state,
        itemList: [],
        error: action.error,
      }
    }
    case ADD_TODO: {
      return {
        ...state,
        itemList: [
          {
            "id": action.id,
            "description": action.description
          },
          ...state.itemList,
        ]
      }
    }
    default: {
      return state;
    }
  }
}