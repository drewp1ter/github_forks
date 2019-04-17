import * as React from 'react'

import { IFork } from '../../models'
import styles from './searchingResults.module.scss'

export interface IProps {
  readonly forks: IFork[]
}

const SearchingResults: React.FC<IProps> = ({ forks }) => {
  const renderItems = () =>
    forks &&
    forks.map(fork => (
      <tr key={fork.id}>
        <td>{fork.fullName}</td>
        <td>{fork.owner.login}</td>
        <td>{fork.stargazersCount}</td>
        <td><a href={fork.htmlUrl} /></td>
      </tr>
    ))

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
          <tbody>
            {renderItems()}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SearchingResults
