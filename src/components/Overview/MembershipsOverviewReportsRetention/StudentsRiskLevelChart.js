import React from 'react';

class StudentsRiskLevelChart extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h2>
          Members Up for Renewal
        </h2>
        <div>
          Over the next <strong>days</strong>, you will have <strong>members up for renewal</strong>
        </div>
        <div class="overview-retention-chart">

        </div>
        <div class="overview-retention-chart__content"></div>
      </div>
    );
  }

}

StudentsRiskLevelChart.defaultProps = {

};

export default StudentsRiskLevelChart;
