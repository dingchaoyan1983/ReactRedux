import React from 'react';
import classnames from 'classnames';
import Dropdown from 'components/Dropdown';
import _get from 'lodash/object/get';
import css from './snapshot.scss';

export class Snapshot extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.defaultTimeframe = 30;
    this.onSelect = this.onSelect.bind(this);
  }

  render () {
    return (
      <div className={classnames(css.snapshot, _get(this.props, 'overview.snap.meta.isLoading') ? 'loading-overlay' : '')}>
        <div className={classnames(css.rowBlue)}>
          <h2 className={classnames(css.rowTitle)}>Performance Snapshot</h2>
          <div className={css.timeframe}>
            <Dropdown options={[{key: 30, value: 'Past 30 Days'}, {key: 60, value: 'Past 60 Days'}, {key: 90, value: 'Past 90 Days'}, {key: 'quarter', value: 'Quater-to-date'}, {key: 'year', value: 'Year-to-date'}]} initSelected={this.defaultTimeframe} onSelect={this.onSelect}/>
          </div>
          <div className={classnames(css.statRow)}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.onSelect(this.defaultTimeframe);
  }

  onSelect(timeframe) {
    this.props.fetchOverviewPerformance(timeframe);
  }
}

export default Snapshot
