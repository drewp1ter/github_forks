import { createAsyncAction } from 'typesafe-actions'
import { IIssuesRequest, IIssues } from './models'

import * as types from './actionTypes'

export const fetchRepos = createAsyncAction(types.FETCH_REPOS_REQUEST, types.FETCH_REPOS_SUCCESS, types.FETCH_REPOS_FAILURE)<
  string,
  string[],
  IRequestError
>()

export const fetchIssues = createAsyncAction(types.FETCH_ISSUES_REQUEST, types.FETCH_ISSUES_SUCCESS, types.FETCH_ISSUES_FAILURE)<
  IIssuesRequest,
  IIssues,
  IRequestError
>()
