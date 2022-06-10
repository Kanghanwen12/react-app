import { createStore, combineReducers } from 'redux'
import { collapsedReducer }  from './reducers/collapsedReducer'
import {LoadingReducer} from './reducers/loadingReducer'


const reducer = combineReducers({
  collapsedReducer,
  LoadingReducer

})

const store = createStore(reducer)
export default store