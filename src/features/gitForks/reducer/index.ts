import { combineReducers } from 'redux'

import forks, { IssuesSearchingAction, IssuesSearchingState } from './forks'
import repos, { ReposAction, IReposState } from './repos'

export type IssuesSearchingAction = IssuesSearchingAction
export type ReposAction = ReposAction

export interface IGitForksState {
  readonly forks: IssuesSearchingState
  readonly repos: IReposState
}

export default combineReducers<IGitForksState>({
  forks,
  repos
})