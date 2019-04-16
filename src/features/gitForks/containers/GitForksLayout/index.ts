import GitForksLayout from './GitForksLayout'
import Types from 'Types'
import { connect } from 'react-redux'

const mapStateToProps = (state: Types.RootState) => {
  const { forks } = state.issuesViewer
  return { ...forks }
}

export default connect(mapStateToProps)(GitForksLayout)