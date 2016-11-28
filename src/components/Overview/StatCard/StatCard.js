import React from 'react';
import classnames from 'classnames';
import css from './stat-card.css';

class StatCard extends React.Component {
  render () {
    const {name, value, change, total, goal} = this.props;
    return (
      <div className={classnames(css.statCard)}>
        <div className={classnames('all-caps', css.title)}>{ name }</div>
        <div className={classnames(css.primaryStat)}>{value}</div>
        <div className={classnames(css.secondaryStat)}>{change}</div>
        <div className={classnames(css.primaryText)}>
          <span>Total {name}:</span> {total}
        </div>
        <div className={classnames(css.secondaryText)}>Goal: {goal}</div>
      </div>
    )
  }
}

export default StatCard
