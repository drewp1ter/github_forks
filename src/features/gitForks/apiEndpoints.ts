import { IForksRequest } from './models'

const { REACT_APP_API_PLACEHOLDER } = process.env

export const userRepos = (name: string): string => `${REACT_APP_API_PLACEHOLDER}users/${name}/repos`
export const repoForks = ({ userName, repoName, page = 0 }: IForksRequest) =>
  `${REACT_APP_API_PLACEHOLDER}repos/${userName}/${repoName}/forks?page=${page}`
