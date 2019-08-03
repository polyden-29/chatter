import { createStore, combineReducers } from 'redux';
import HomePageReducer from './reducers/HomePageReducer';

export default function configureStore() {
  const reducers = combineReducers({
    HomePageReducer
  })

  const store = createStore(reducers)

  return store
}