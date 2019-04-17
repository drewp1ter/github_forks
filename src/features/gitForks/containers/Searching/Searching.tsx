import * as React from 'react'
import { fromEvent } from 'rxjs'
import { debounceTime, map, tap, filter, pluck } from 'rxjs/operators'
import classNames from 'classnames'

import { Input, Button, InputWithSuggestions, Spinner } from 'components'
import { IForksRequest } from '../../models'
import { fetchForks, fetchRepos } from '../../actions'
import { IReposState } from '../../reducer/repos'
import styles from './searching.module.scss'

export interface IPropsFromDispatch {
  fetchForks: typeof fetchForks.request
  fetchRepos: typeof fetchRepos.request
}

export interface IProps {
  readonly className?: string
  readonly forksFetching: boolean
}

export interface IState extends IForksRequest {
  readonly [key: string]: any
}

type AllProps = IProps & IPropsFromDispatch & IReposState

class Searching extends React.Component<AllProps, IState> {
  public static defaultProps = {
    className: '',
  }

  public state: IState = {
    userName: '',
    repoName: '',
  }

  public userNameSubscription: any = null

  public componentWillUnmount = () => this.userNameSubscription.unsubscribe()

  public handleChange = (value: string | number, name = 'def', onSelect = false): void =>
    this.setState({ [name]: value }, () => onSelect && this.handleClick())

  public handleClick = () => {
    const { fetchForks } = this.props
    const { userName, repoName } = this.state
    fetchForks({ userName, repoName })
  }

  public fetchRepos = (node: HTMLInputElement) => {
    const { fetchRepos } = this.props
    try {
      if (!node) {
        return
      }
      this.userNameSubscription = fromEvent(node, 'keyup')
        .pipe(
          tap(() => this.setState({ reposNotFound: false })),
          pluck('target', 'value'),
          map(value => value as string),
          filter(value => value !== ''),
          debounceTime(800),
        )
        .subscribe(userName => fetchRepos(userName))
    } catch (e) {
      console.error(e)
    }
  }

  public render = () => {
    const { className, forksFetching, repos, error, fetching } = this.props
    const { userName, repoName } = this.state
    const wrpClass = classNames(styles.wrapper, className)
    return (
      <div className={wrpClass}>
        <div className={styles.userName}>
          <label className={styles.label}>User name</label>
          <Input
            inputRef={this.fetchRepos}
            onChange={this.handleChange}
            hasError={!!error.message}
            name="userName"
            value={userName}
          />
        </div>
        <div className={styles.spinner}>{fetching && <Spinner />}</div>
        <div className={styles.repoName}>
          <label className={styles.label}>Repository name</label>
          <InputWithSuggestions name="repoName" onChange={this.handleChange} suggestions={repos} value={repoName} />
        </div>
        <Button className={styles.button} onClick={this.handleClick} disabled={forksFetching || !repoName || !userName} loading={forksFetching}>
          Search
        </Button>
      </div>
    )
  }
}

export default Searching
