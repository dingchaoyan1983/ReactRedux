import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import * as d3 from 'd3';
import _debounce from 'lodash/function/debounce';
import css from './students-demographics-chart.css';

class StudentsDemographicsChart extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.xScale = d3.scaleBand();
    this.yScale = d3.scaleLinear();
    this.xAxis = d3.axisBottom()
    this.yAxis = d3.axisLeft().ticks(10).tickFormat(d3.format('.0%'));
    this.onResize = this.onResize.bind(this);

    this.padding = {
      top: 10,
      left: 40,
      bottom: 30,
      right: 10
    };
  }

  get dataSet() {
    return this.props.dataSet || [];
  }

  render() {
    return (
      <div ref="selfDOM" className={css.container}>
        <svg ref="svgDOM">
          <g ref="canvasDOM">
            <g ref="xAxisDOM" className={css.xAxis}></g>
            <g ref="yAxisDOM" className={css.yAxis}></g>
            <g ref="barsDOM"></g>
          </g>
        </svg>
      </div>
    )
  }

  componentDidMount() {
    this.selfDOM = $(ReactDOM.findDOMNode(this.refs.selfDOM));
    this.svgDOM = $(ReactDOM.findDOMNode(this.refs.svgDOM));
    this.canvasDOM = d3.select(ReactDOM.findDOMNode(this.refs.canvasDOM));
    this.xAxisDOM = d3.select(ReactDOM.findDOMNode(this.refs.xAxisDOM));
    this.yAxisDOM = d3.select(ReactDOM.findDOMNode(this.refs.yAxisDOM));
    this.barsDOM = d3.select(ReactDOM.findDOMNode(this.refs.barsDOM));

    this.renderChart();
    $(window).on('resize.demographics_chart', _debounce(this.onResize, 200));
  }

  componentDidUpdate() {
    this.renderChart();
  }

  componentWillUnmount() {
    $(window).off('resize.demographics_chart');
  }

  renderChart() {
    const barWidth = 30;
    const selfDOM = this.selfDOM;
    const svgDOM = this.svgDOM;
    const canvasDOM = this.canvasDOM;
    const xAxisDOM = this.xAxisDOM;
    const yAxisDOM = this.yAxisDOM;
    const barsDOM = this.barsDOM;
    const padding = this.padding;
    const dataSet = this.dataSet;
    const xScale = this.xScale;
    const yScale = this.yScale;
    const xAxis = this.xAxis;
    const yAxis = this.yAxis;
    const width = selfDOM.width();
    const height = selfDOM.height();
    const canvasWidth = width - padding.left - padding.right;
    const canvasHeight = height - padding.top - padding.bottom;
    const maxYval = dataSet.reduce((max, d) => {
      return Math.max(max, Math.min(Math.max(d.male, d.female) / 100 + 0.1, 1));
    }, 0.1);

    canvasDOM.attr('transform', `translate(${padding.left},${padding.top})`);
    svgDOM.width(width);
    svgDOM.height(height);

    xScale.rangeRound([0, canvasWidth]).domain(dataSet.map(item => item.age));
    yScale.domain([0, maxYval]).range([canvasHeight, 0]);

    xAxis.scale(xScale).ticks(10).tickSize(-canvasHeight);
    yAxis.scale(yScale).tickSize(-canvasWidth);

    xAxisDOM.call(xAxis).attr('transform', `translate(0, ${canvasHeight})`);
    yAxisDOM.call(yAxis);

    const update = barsDOM.selectAll('g.bar').data(dataSet);
    const enter = update.enter();
    const exit = update.exit();
    const femaleTranslateX = xScale.bandwidth() / 2 - barWidth;
    const maleTranslateX = xScale.bandwidth() / 2;
    const updatedBarWrapper = update.attr('transform', d => `translate(${xScale(d.age)}, 0)`);

    updatedBarWrapper.select(`rect.${css.female}`)
      .attr('width', barWidth)
      .transition()
      .duration(750)
      .attr('transform', d => `translate(${femaleTranslateX}, ${yScale(d.female / 100)})`)
      .attr('height', d => canvasHeight - yScale(d.female / 100));

    updatedBarWrapper.select(`rect.${css.male}`)
      .attr('width', barWidth)
      .transition()
      .duration(750)
      .attr('transform', d => `translate(${maleTranslateX}, ${yScale(d.male / 100)})`)
      .attr('height', d => canvasHeight - yScale(d.male / 100));

    const enteredBarWrapper = enter.append('g')
      .attr('class', 'bar')
      .attr('transform', d => `translate(${xScale(d.age)}, 0)`);

    enteredBarWrapper.append('rect')
      .attr('width', barWidth)
      .attr('class', css.female)
      .attr('transform', () => `translate(${femaleTranslateX}, ${yScale(0)})`)
      .attr('height', () => canvasHeight - yScale(0))
      .transition()
      .duration(750)
      .attr('transform', d => `translate(${femaleTranslateX}, ${yScale(d.female / 100)})`)
      .attr('height', d => canvasHeight - yScale(d.female / 100));

    enteredBarWrapper.append('rect')
      .attr('class', css.male)
      .attr('width', barWidth)
      .attr('transform', () => `translate(${maleTranslateX}, ${yScale(0)})`)
      .attr('height', () => canvasHeight - yScale(0))
      .transition()
      .duration(750)
      .attr('transform', d => `translate(${maleTranslateX}, ${yScale(d.male / 100)})`)
      .attr('height', d => canvasHeight - yScale(d.male / 100));

    exit.remove();
  }

  onResize() {
    this.forceUpdate();
  }
}

StudentsDemographicsChart.defaultProps = {

}

StudentsDemographicsChart.contextTypes = {

}

StudentsDemographicsChart.propTypes = {

}

export default StudentsDemographicsChart
