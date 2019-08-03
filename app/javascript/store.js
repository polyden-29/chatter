import { createStore, combineReducers } from 'redux';
import HomePageReducer from './reducers/HomePageReducer';
import RegisterReducer from './reducers/RegisterReducer';

export default function configureStore() {
  const reducers = combineReducers({
    HomePageReducer,
    RegisterReducer
  })

  const store = createStore(reducers)

  return store
}