import {
  ADD_CHILDREN,
  EDIT_CHILDREN,
  REMOVE_CHILDREN,
  GET_ALL_CHILDREN,
} from '../actions/types';

const initialState = {
  listofChildren: [],
};

export const childrenReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHILDREN:
      return {
        ...state,
        listofChildren: [...state.listofChildren, action.data],
      };

    case EDIT_CHILDREN:
      return {
        ...state,
        listofChildren: state.listofChildren.map(data => {
          return data.id === action.data.id ? action.data : data;
        }),
      };
    case REMOVE_CHILDREN:
      return {
        ...state,
        listofChildren: state.listofChildren.filter(
          data => data.id !== action.data.id,
        ),
      };
    case GET_ALL_CHILDREN:
      return state.listofChildren;
    default:
      return state;
  }
};
