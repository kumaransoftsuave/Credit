import {createStore, applyMiddleware} from 'redux';
import {combineReducers} from 'redux';
import logger from 'redux-logger';
import {childrenReducer} from './reducers/childrenReducer';
import {parentReducer} from './reducers/parentReducer';
import {cardReducer} from './reducers/cardReducer';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  debug: true,
  storage: AsyncStorage,
  whitelist: ['children', 'parent', 'card'],
};

const rootReducer = combineReducers({
  children: childrenReducer,
  parent: parentReducer,
  card: cardReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(logger));

export default store;
