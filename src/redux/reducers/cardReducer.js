import {ADD_CARD, EDIT_CARD, REMOVE_CARD, GET_ALL_CARD} from '../actions/types';

const initialState = {
  listofCards: [],
};

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        listofCards: [
          ...state.listofCards.map(data => {
            if (action.data.isDefault) {
              data.isDefault = false;
              return data;
            } else {
              return data;
            }
          }),
          action.data,
        ],
      };

    case EDIT_CARD:
      return {
        ...state,
        listofCards: state.listofCards.map(data => {
          if (action.data.isDefault && data.id !== action.data.id) {
            data.isDefault = false;
          }
          return data.id === action.data.id ? action.data : data;
        }),
      };
    case REMOVE_CARD:
      return {
        ...state,
        listofCards: state.listofCards.filter(
          data => data.childId !== action.data.id,
        ),
      };
    case GET_ALL_CARD:
      return state.listofCards;
    default:
      return state;
  }
};
