import * as React from 'react'
import { RouteComponentProps } from 'react-router'

import styles from './searchingResults.module.scss'
import { IForksState } from '../../reducer/forks'
import { fetchForks } from '../../actions'

export interface IMatchParams {
  userName: string
  repoName: string
}

export interface IProps {
  readonly fetchForks: typeof fetchForks.request
}

type AllProps = IForksState & IProps & RouteComponentProps<IMatchParams>

class SearchingResults extends React.Component<AllProps> {
  public componentDidMount = () => {
    const { forks, fetchForks, match } = this.props
    const { repoName, userName } = match.params
    !forks.length && repoName && userName && fetchForks({ repoName, userName })
  }

  public componentWillReceiveProps = (nextProps: AllProps) => {
    const { fetchForks, match } = this.props
    const { repoName: prevRepoName, userName: prevUserName } = match.params
    const { repoName, userName } = nextProps.match.params
    if (repoName !== prevRepoName || userName !== prevUserName) {
      fetchForks({ repoName, userName })
    }
  }

  public renderItems = () => {
    const { forks } = this.props
    return (
      forks &&
      forks.map(fork => (
        <tr key={fork.id}>
          <td>{fork.fullName}</td>
          <td>{fork.owner.login}</td>
          <td>{fork.stargazersCount}</td>
          <td>
            <a href={fork.htmlUrl}>{fork.htmlUrl}</a>
          </td>
        </tr>
      ))
    )
  }

  public render = () => {
    return (
      <div className={styles.ibox}>
        <div className={styles.iboxContent}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Owner</th>
                <th>Stars</th>
                <th>URL</th>
              </tr>
            </thead>
            <tbody>{this.renderItems()}</tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default SearchingResults
