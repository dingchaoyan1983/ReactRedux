import React from 'react';
import RingChart from 'components/RingChart';

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

class StudentsRiskLevelChart extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  get riskLevels() {
    const riskLevels = this.props['risk-levels'];
    if (riskLevels) {
      return riskLevels
    } else {
      return [];
    }
  }

  render() {
    const riskLevelsChart = this.riskLevels.map(item => {
      return <div key={item.name} className="overview-retention-chart__item">
              <RingChart radius="70" ringWidth="8" percent={item['risk-percentage'] / 100} {...RING_COLOR[item.name]}/>
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
        <div className="overview-retention-chart">
          {riskLevelsChart}
        </div>
        <div class="overview-retention-chart__content"></div>
      </div>
    );
  }
}

StudentsRiskLevelChart.defaultProps = {

};

export default StudentsRiskLevelChart;
