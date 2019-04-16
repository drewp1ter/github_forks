import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import Types from 'Types'

import * as actions from '../../actions'
import Searching from './Searching'

const mapStateToProps = (state: Types.RootState) => {
  const { forks, repos } = state.issuesViewer
  return { forks, repos }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      fetchIssues: actions.fetchIssues.request,
      fetchRepos: actions.fetchRepos.request,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Searching)
