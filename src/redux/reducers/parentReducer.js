import {ADD_PARENT, GET_PARENT} from '../actions/types';

const initialState = {
  parent: {},
};

export const parentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PARENT:
      return {
        ...state,
        parent: action.data,
      };
    case GET_PARENT:
      return state.parent;
    default:
      return state;
  }
};
