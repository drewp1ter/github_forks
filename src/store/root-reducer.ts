import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { gitForksReducer } from 'features/gitForks'

export default combineReducers({
  routing: routerReducer,
  gitForks: gitForksReducer,
})
