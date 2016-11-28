import React from 'react';
import classnames from 'classnames';
import css from './map-slider-bar.css';

class Mapsliderbar extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      expanded: true
    };

    this.toggle = this.toggle.bind(this);
  }

  render () {
    let { expanded } = this.state;

    return (
      <div className={classnames(css.mapControls, expanded ? css.expanded : '')}>
        <button className={classnames(css.toggler, expanded ? css.togglerExpanded : '')} onClick = {this.toggle}>
          <span className={classnames(expanded ? 'icon-left-double-arrow' : 'icon-menu')}></span>
        </button>
        {this.props.children}
      </div>
    );
  }

  toggle() {
    let {expanded} = this.state;
    this.setState({
      expanded: !expanded
    });
  }
}

Mapsliderbar.defaultProps = {

}

Mapsliderbar.contextTypes = {

}

Mapsliderbar.propTypes = {

}

export default Mapsliderbar
