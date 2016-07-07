import React from 'react';
import StudentsRiskLevelChart from './StudentsRiskLevelChart';
import classnames from 'classnames';
import Dropdown from 'components/Dropdown';
import _get from 'lodash/object/get';
import css from './students-retention.scss';

export class MembershipsOverviewReportsRetention extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onTimeframeSelect = this.onTimeframeSelect.bind(this);
  }

  render () {
    const { selectedTimeframe } = this.props;
    const onTimeframeSelect = this.onTimeframeSelect;
    const riskLevels = _get(this.props, 'overview.riskLevels.payload.data.attributes');

    return (
      <div className={classnames('acl_row', css.content, _get(this.props, 'overview.riskLevels.meta.isLoading') ? 'loading-overlay' : '')}>
        <div className="pull-right">
          <Dropdown options={[{key: 30, value: 'Past 30 Days'}, {key: 60, value: 'Past 60 Days'}, {key: 90, value: 'Past 90 Days'}]} initSelected={selectedTimeframe} onSelect={onTimeframeSelect}/>
        </div>
        <StudentsRiskLevelChart {...riskLevels}/>
      </div>
    )
  }

  onTimeframeSelect(selectedTimeframe) {
    this.props.changeTabSpecifiedVariables({selectedTimeframe});
    this.loadRiskLevelsData(selectedTimeframe);
  }

  loadRiskLevelsData(timeframe) {
    this.props.fetchRiskLevels(timeframe);
  }

  componentDidMount() {
    this.loadRiskLevelsData(this.props.selectedTimeframe);
  }
}

MembershipsOverviewReportsRetention.defaultProps = {

}

MembershipsOverviewReportsRetention.contextTypes = {

}

MembershipsOverviewReportsRetention.propTypes = {

}

export default MembershipsOverviewReportsRetention
