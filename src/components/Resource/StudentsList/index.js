import {Table} from 'antd';
import React from 'react';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
}];

export default class StudentsList extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.fetchStudents();
  }

  render() {
    return <Table columns={columns} size="default" {...this.props}/>
  }
}

StudentsList.defaultProps = {
  dataSource:[],
  loading: false
};
