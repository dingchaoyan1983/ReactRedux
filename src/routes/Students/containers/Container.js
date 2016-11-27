import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import StudentsList from 'components/StudentsList';

export class People extends React.Component {
  render () {
    return (
      <StudentsList/>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}
const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(People)
