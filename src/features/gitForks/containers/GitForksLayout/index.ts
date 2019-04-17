import GitForksLayout from './GitForksLayout'
import Types from 'Types'
import { connect } from 'react-redux'

const mapStateToProps = (state: Types.RootState) => {
  const { payload, fetching, error } = state.gitForks.forks
  return { payload, fetching, error }
}

export default connect(mapStateToProps)(GitForksLayout)