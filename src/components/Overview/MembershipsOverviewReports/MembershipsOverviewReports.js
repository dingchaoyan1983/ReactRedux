import React from 'react';
import Tab from 'components/Tab';

import MembershipsOverviewReportsAcquisition from '../MembershipsOverviewReportsAcquisition';
import MembershipsOverviewReportsRetention from '../MembershipsOverviewReportsRetention';


export class MembershipsOverviewReports extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.tabs = [
      {name: 'students', contentComponent: MembershipsOverviewReportsRetention},
      {name: 'teachers', contentComponent: MembershipsOverviewReportsAcquisition}
    ];
  }

  render () {
    return (
      <div>
        <Tab tabs={this.tabs} />
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
