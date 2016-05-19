import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchOverviewPerformance } from '../modules/snap';
import _get from 'lodash/object/get';

import Snapshot from 'components/Overview/Snapshot';
import StatCard from 'components/Overview/StatCard';
import MembershipsOverviewReports from 'components/Overview/MembershipsOverviewReports';

const mapStateToProps = (state) => {
  return {
    overview: state.overview
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchOverviewPerformance
  }, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Overview extends React.Component {
  render() {
    let snapshot = _get(this.props, 'overview.snap.payload.data.attributes.snapshot');
    let children = false;
    if (snapshot) {
      children = snapshot.map((item, index) => {
        let props = {key: index, ...item}
        return <StatCard {...props}/>
      });
    }
    return (
      <div>
        <Snapshot {...this.props}>
          {children}
        </Snapshot>
        <MembershipsOverviewReports/>
        {this.props.children}
      </div>
    )
  }
}
