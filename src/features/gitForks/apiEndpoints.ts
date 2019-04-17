import { IForksRequest } from './models'

export const userRepos = (name: string): string => `/users/${name}/repos`
export const repoForks = ({ userName, repoName, page = 0 }: IForksRequest) =>
  `/repos/${userName}/${repoName}/forks?page=${page}`
