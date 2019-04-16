import { combineReducers } from 'redux'
import { ActionType } from 'typesafe-actions'

import * as actions from '../actions'
import * as types from '../actionTypes'

export interface IReposState {
  readonly payload: string[]
  readonly fetching: boolean
  readonly error: IRequestError
}

export type ReposAction = ActionType<typeof actions>

export default combineReducers<IReposState, ReposAction>({
  payload: (state = [], action) =>
    action.type === types.FETCH_REPOS_SUCCESS ? action.payload : state,
  fetching: (state = false, action) =>
    action.type === types.FETCH_ISSUES_REQUEST || (state && !(types.FETCH_ISSUES_SUCCESS || types.FETCH_ISSUES_FAILURE)),
  // tslint:disable-next-line: variable-name
  error: (_state, action) => (action.type === types.FETCH_ISSUES_FAILURE ? action.payload : { message: '', status: 0 }),
})
