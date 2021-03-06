import React from 'react';
import classnames from 'classnames';
import RingChart from 'components/RingChart';
import StudentsDemographicsChart from './StudentsDemographicsChart';
import _get from 'lodash/object/get';
import css from './students-risk-level-chart.css';

const RING_COLOR = {
  'low-risk': {
    foregroundColor: '#45ba80',
    backgroundColor: '#a2ddbf'
  },
  'medium-risk': {
    foregroundColor: '#fcbd68',
    backgroundColor: '#fcdeb3'
  },
  'high-risk': {
    foregroundColor: '#f1645c',
    backgroundColor: '#f9b1ad'
  },
  'unknown-risk': {
    foregroundColor: '#74848a',
    backgroundColor: '#bac1c4'
  }
};

const RISK_NAME_MAPPING = {
  'low-risk': 'low risk',
  'medium-risk': 'at-risk',
  'high-risk': 'high risk',
  'unknown-risk': 'unknown'
};

class StudentsRiskLevelChart extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selected: 'medium-risk'
    };
  }

  get riskLevels() {
    const riskLevels = this.props['risk-levels'];
    if (riskLevels) {
      return riskLevels
    } else {
      return [];
    }
  }

  get selectedRiskLevel() {
    const riskLevels = this.props['risk-levels'];
    const selected = this.state.selected;

    if(riskLevels && selected) {
      return riskLevels.find(item => item.name === selected);
    } else {
      return null;
    }
  }

  render() {
    const {['total-students']: totalStudents} = this.props;

    const riskLevelsChart = this.riskLevels.map(item => {
      const divStyle = {
        color: `${RING_COLOR[item.name].foregroundColor}`
      };
      const selected = item.name === this.state.selected;

      return <div key={item.name} className={classnames(css.chartItem, selected ? css.selected : '' )} onClick={this.onSelect.bind(this, item.name)}>
              <RingChart radius="70" ringWidth="8" percent={item['risk-percentage'] / 100} {...RING_COLOR[item.name]}/>
              <h2 className={css.chartItemTitle} style={divStyle}>
                <strong>{RISK_NAME_MAPPING[item.name]}</strong>
              </h2>
              <h2>
                <strong>{item.count}</strong> / {totalStudents}
              </h2>
             </div>
    });

    return (
      <div>
        <h2>
          Students Who will drop-out
        </h2>
        <div>
          Over the next <strong>days</strong>, forecast <strong>students will drop-out</strong>
        </div>
        <div className={css.chart}>
          {riskLevelsChart}
        </div>
        <div className={css.chartContent}>
          <StudentsDemographicsChart dataSet={_get(this.selectedRiskLevel, 'demographics')}/>
        </div>
      </div>
    );
  }

  onSelect(name) {
    this.setState({
      selected: name
    });
  }
}

StudentsRiskLevelChart.defaultProps = {

};

export default StudentsRiskLevelChart;
