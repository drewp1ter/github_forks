import * as React from 'react'
import { toast } from 'react-toastify'

import { Searching } from '..'
import { SearchingResults } from '../../components'
import styles from './gitForksLayout.module.scss'
import { Header } from 'components'
import { IssuesSearchingState } from '../../reducer/forks'

class GitForksLayout extends React.Component<IssuesSearchingState> {
  public componentWillReceiveProps = (nextProps: IssuesSearchingState) => {
    const {
      error: { message },
    } = nextProps
    message && toast.error(message)
  }

  public render = () => {
    return (
      <div className={styles.layout}>
        <Header title="GitHub Interface" />
        <Searching className={styles.searching} />
      </div>
    )
  }
}

export default GitForksLayout
