import * as gitForksContainers from './containers'
import gitForksReducer, { GitForksAction, IGitForksState } from './reducer'
import gitForksEpics from './epics'
import gitForksRoutes from './routes'
import * as gitForksActions from './actions'

export {
  gitForksContainers,
  gitForksReducer,
  gitForksRoutes,
  gitForksEpics,
  gitForksActions,
}
export type GitForksAction = GitForksAction
export type IGitForksState = IGitForksState
