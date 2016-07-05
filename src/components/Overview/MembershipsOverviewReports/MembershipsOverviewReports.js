import React from 'react';
import Tab from 'components/Tab';

import MembershipsOverviewReportsAcquisition from '../MembershipsOverviewReportsAcquisition';
import MembershipsOverviewReportsRetention from '../MembershipsOverviewReportsRetention';


export class MembershipsOverviewReports extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.tabs = [
      {name: 'students', contentComponent: MembershipsOverviewReportsRetention, selectedTimeframe: 30},
      {name: 'teachers', contentComponent: MembershipsOverviewReportsAcquisition, selectedTimeframe: 30}
    ];
  }

  render () {
    return (
      <div>
        <Tab tabs={this.tabs} {...this.props}/>
      </div>
    )
  }
}

MembershipsOverviewReports.defaultProps = {

}

MembershipsOverviewReports.contextTypes = {

}

MembershipsOverviewReports.propTypes = {

}

export default MembershipsOverviewReports
