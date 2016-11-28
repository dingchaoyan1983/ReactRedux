import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import StudentsList from 'components/Resource/StudentsList';
import {fetchStudents} from '../actions';
import _get from 'lodash/object/get';

export class Resource extends React.Component {
  render () {
    return (
      <StudentsList {...this.props} loading={_get(this.props.resource.students, 'meta.isLoading')} dataSource={_get(this.props.resource.students, 'payload.data.attributes.data')}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    resource: state.resource
  }
}
const mapDispatchToProps = {
  fetchStudents
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Resource)
