import { createStore, combineReducers, applyMiddleware } from 'redux';
import { FirstReducer } from './reducer/FirstReducer'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
   FirstReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;