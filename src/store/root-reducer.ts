import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { issuesSearchingReducer } from 'features/gitForks'

export default combineReducers({
  routing: routerReducer,
  issuesViewer: issuesSearchingReducer,
})
