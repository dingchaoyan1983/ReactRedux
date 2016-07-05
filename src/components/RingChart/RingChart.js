import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

export class RingChart extends React.Component {
  constructor(props, context) {
    super(props, context);
    this._arcFunc = d3.arc()
      .cornerRadius(5)
      .startAngle(0);
  }

  get canvasWidth() {
    return this.props.radius * 2;
  }

  get canvasHeight() {
    return this.canvasWidth;
  }

  get innerRadius() {
    return this.props.radius - this.props.ringWidth;
  }

  get svgStyles() {
    return {
      backgroundColor: this.props.canvasBgColor
    };
  }

  get backgroundColorStyle() {
    return {
      fill: this.props.backgroundColor
    };
  }

  get foregroundColorStyle() {
    return {
      fill: this.props.foregroundColor
    };
  }

  get canvasTransform() {
    return `translate(${this.props.radius},${this.props.radius})`;
  }

  get arcFunc() {
    return this._arcFunc.innerRadius(this.innerRadius).outerRadius(this.props.radius);
  }

  render() {
    return (
      <svg width={this.canvasWidth} height={this.canvasHeight} style={this.svgStyles}>
        <g transform={this.canvasTransform}>
          <path ref="back-annular" style={this.backgroundColorStyle}></path>
          <path ref="fore-annular" style={this.foregroundColorStyle}></path>
        </g>
        <text textAnchor="middle" alignmentBaseline="middle" x={this.props.radius} y={this.props.radius}>{parseInt(this.props.percent * 100)}%</text>
      </svg>
    )
  }

  componentDidMount() {
    this.drawRings();
  }

  componentDidUpdate() {
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
      }, 2 * Math.PI * this.props.percent);
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
