import { createStore, combineReducers } from 'redux';
import { FirstReducer } from './reducer/FirstReducer'

const rootReducer = combineReducers({
   FirstReducer
})

const store = createStore(rootReducer)

export default store;