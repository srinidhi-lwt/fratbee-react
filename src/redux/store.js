import { createStore, combineReducers, applyMiddleware } from 'redux';
import { SearchCollegeReducer } from './reducer/SearchCollegeReducer'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
   SearchCollegeReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;