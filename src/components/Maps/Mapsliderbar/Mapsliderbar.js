import React from 'react';
import classnames from 'classnames';

export class Mapsliderbar extends React.Component {
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
      <div className={classnames('map-controls', expanded ? 'expanded' : '')}>
        <button className={classnames('map-controls--toggler', expanded ? 'expanded' : '')} onClick = {this.toggle}>
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
