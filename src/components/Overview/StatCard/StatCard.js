import React from 'react';
import classnames from 'classnames';

export class StatCard extends React.Component {
  render () {
    const {name, value, change, total, goal} = this.props;
    return (
      <div className={classnames('stat__card')}>
        <div className={classnames('all-caps', 'title')}>{ name }</div>
        <div className={classnames('primary_stat')}>{value}</div>
        <div className={classnames('secondary_stat')}>{change}</div>
        <div className={classnames('stat-card__primary-text')}>
          <span>Total {name}:</span> {total}
        </div>
        <div className={classnames('stat-card__secondary-text')}>Goal: {goal}</div>
      </div>
    )
  }
}

export default StatCard
