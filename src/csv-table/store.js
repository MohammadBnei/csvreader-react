import { createStore } from 'redux'
import csvReducer from './reducers'


const store = createStore(csvReducer)

export default store