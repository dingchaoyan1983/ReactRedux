import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

export class RingChart extends React.Component {
  constructor(props, context) {
    super(props, context);
    this._arcFunc = d3.arc()
      .cornerRadius(5)
      .startAngle(0);

    this.state = {
      radius: props.radius,
      ringWidth: props.ringWidth,
      backgroundColor: props.backgroundColor,
      foregroundColor: props.foregroundColor,
      canvasBgColor: props.canvasBgColor,
      percent: props.percent
    };
  }

  get canvasWidth() {
    return this.state.radius * 2;
  }

  get canvasHeight() {
    return this.canvasWidth;
  }

  get innerRadius() {
    return this.state.radius - this.state.ringWidth;
  }

  get svgStyles() {
    return {
      backgroundColor: this.state.canvasBgColor
    };
  }

  get backgroundColorStyle() {
    return {
      fill: this.state.backgroundColor
    };
  }

  get foregroundColorStyle() {
    return {
      fill: this.state.foregroundColor
    };
  }

  get canvasTransform() {
    return `translate(${this.state.radius},${this.state.radius})`;
  }

  get arcFunc() {
    return this._arcFunc.innerRadius(this.innerRadius).outerRadius(this.state.radius);
  }

  render() {
    return (
      <svg width={this.canvasWidth} height={this.canvasHeight} style={this.svgStyles}>
        <g transform={this.canvasTransform}>
          <path ref="back-annular" style={this.backgroundColorStyle}></path>
          <path ref="fore-annular" style={this.foregroundColorStyle}></path>
        </g>
        <text textAnchor="middle" alignmentBaseline="middle" x={this.state.radius} y={this.state.radius}>{this.state.percent * 100}%</text>
      </svg>
    )
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !(nextProps.radius === nextState.radius
      && nextProps.ringWidth === nextState.ringWidth
      && nextProps.backgroundColor === nextState.backgroundColor
      && nextProps.foregroundColor === nextState.foregroundColor
      && nextProps.canvasBgColor === nextState.canvasBgColor
      && nextProps.percent === nextState.percent)
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.drawRings();
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
    this.drawRings(true);
  }

  drawRings(redraw = false) {
    const arcFunc = this.arcFunc;

    d3.select(ReactDOM.findDOMNode(this.refs['back-annular'])).datum({
      endAngle: 2 * Math.PI
    })
      .attr('d', arcFunc);

    const foreAnnular = d3.select(ReactDOM.findDOMNode(this.refs['fore-annular']));

    if (!redraw) {
      foreAnnular.datum({
        endAngle: 0
      });
    }

    foreAnnular.transition()
      .duration(750)
      .call(function(transition, newAngle) {
        transition.attrTween('d', function(d) {
          let interpolate = d3.interpolate(d.endAngle, newAngle);
          return function(t) {
            d.endAngle = interpolate(t);
            return arcFunc(d);
          };
        });
      }, 2 * Math.PI * this.state.percent);
  }
}

RingChart.defaultProps = {
  radius: 50,
  ringWidth: 10,
  backgroundColor: '#eee',
  foregroundColor: '#000',
  canvasBgColor: '#fff',
  percent: 0.2
};

export default RingChart;
