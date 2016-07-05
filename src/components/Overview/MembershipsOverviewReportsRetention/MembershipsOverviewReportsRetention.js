import React from 'react';
import RingChart from 'components/RingChart';
import StudentsRiskLevelChart from './StudentsRiskLevelChart';
import Dropdown from 'components/Dropdown';


export class MembershipsOverviewReportsRetention extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onTimeframeSelect = this.onTimeframeSelect.bind(this);
  }

  render () {
    const { selectedTimeframe } = this.props;
    const onTimeframeSelect = this.onTimeframeSelect;

    return (
      <div className="acl_row">
        <div className="snapshot-row__timeframe">
          <Dropdown options={[{key: 30, value: 'Past 30 Days'}, {key: 60, value: 'Past 60 Days'}, {key: 90, value: 'Past 90 Days'}]} initSelected={selectedTimeframe} onSelect={onTimeframeSelect}/>
        </div>
        <StudentsRiskLevelChart/>
      </div>
    )
  }

  onTimeframeSelect(selectedTimeframe) {
    this.props.changeTabSpecifiedVariables({selectedTimeframe});
  }
}

MembershipsOverviewReportsRetention.defaultProps = {

}

MembershipsOverviewReportsRetention.contextTypes = {

}

MembershipsOverviewReportsRetention.propTypes = {

}

export default MembershipsOverviewReportsRetention
