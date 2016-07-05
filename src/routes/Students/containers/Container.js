import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export class People extends React.Component {
  render () {
    return (
      <div>Students page</div>
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
