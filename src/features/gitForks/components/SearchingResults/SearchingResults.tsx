import * as React from 'react'
import { Link } from 'react-router-dom'

import { IFork } from '../../models'
import styles from './searchingResults.module.scss'

export interface IProps {
  readonly forks: IFork[]
}

const SearchingResults: React.FC<IProps> = ({ forks }) => {
  const issuesList = (): JSX.Element[] =>
  forks.map((fork: IFork) => {
      return (
        <div key={fork.id} className={styles.item}>
          <div className={styles.avatar}>
            <img src={fork.owner.avatarUrl} alt="" />
            <div className={styles.nick}>{fork.owner.login}</div>
          </div>
          <div className={styles.itemBody}>

          </div>
        </div>
      )
    })

  return <div className={styles.container}>{issuesList()}</div>
}

export default SearchingResults
