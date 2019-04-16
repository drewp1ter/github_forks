import { combineEpics } from 'redux-observable'

import { issuesSearchingEpics } from 'features/gitForks'

export default combineEpics(issuesSearchingEpics)
