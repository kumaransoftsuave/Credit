import {
  ADD_CHILDREN,
  EDIT_CHILDREN,
  REMOVE_CHILDREN,
  GET_ALL_CHILDREN,
  ADD_PARENT,
  GET_PARENT,
  ADD_CARD,
  EDIT_CARD,
  REMOVE_CARD,
  GET_ALL_CARD,
} from './types';

export const addChildren = data => ({
  type: ADD_CHILDREN,
  data,
});

export const editChildren = data => ({
  type: EDIT_CHILDREN,
  data,
});

export const removeChildren = data => ({
  type: REMOVE_CHILDREN,
  data,
});

export const getAllChildren = data => ({
  type: GET_ALL_CHILDREN,
  data,
});

export const addParent = data => ({
  type: ADD_PARENT,
  data,
});

export const getParent = data => ({
  type: GET_PARENT,
  data,
});

export const nextId = items => {
  const maximumId = items.reduce((maxId, item) => Math.max(item.id, maxId), -1);
  return maximumId + 1;
};

export const addCard = data => ({
  type: ADD_CARD,
  data,
});

export const editCard = data => ({
  type: EDIT_CARD,
  data,
});

export const removeCard = data => ({
  type: REMOVE_CARD,
  data,
});

export const getAllCard = data => ({
  type: GET_ALL_CARD,
  data,
});
