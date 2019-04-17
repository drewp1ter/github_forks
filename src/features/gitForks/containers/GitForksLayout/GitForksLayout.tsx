import * as React from 'react'
import { toast } from 'react-toastify'

import { Searching } from '..'
import { SearchingResults } from '../../components'
import styles from './gitForksLayout.module.scss'
import { Header } from 'components'
import { IForksState } from '../../reducer/forks'

class GitForksLayout extends React.Component<IForksState> {
  public componentWillReceiveProps = (nextProps: IForksState) => {
    const {
      error: { message },
    } = nextProps
    message && toast.error(message)
  }

  public render = () => {
    const { forks } = this.props
    return (
      <div className={styles.layout}>
        <Header title="GitHub Interface" />
        <Searching className={styles.searching} />
        <SearchingResults forks={forks} />
      </div>
    )
  }
}

export default GitForksLayout
