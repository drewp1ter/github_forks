import humps from 'humps'

import { User, IUser } from './user'

export interface IForksRequest {
  userName: string
  repoName: string
  page?: number
}

export interface IFork {
  id: number
  fullName: string
  htmlUrl: string
  stargazersCount: number
  owner: IUser
}

export class Fork implements IFork {
  public id: number
  public fullName: string
  public htmlUrl: string
  public stargazersCount: number
  public owner: IUser

  constructor(props: any = {}) {
    this.id = props.id || -1
    this.fullName = props.fullName || ''
    this.htmlUrl = props.htmlUrl || ''
    this.stargazersCount = props.stargazersCount || 0
    this.owner = props.owner || ''
  }

  public static create(dto: {}): IFork {
    let fork: any = humps.camelizeKeys(dto)
    fork.owner = new User(fork.owner)
    return new Fork(fork)
  }
}
