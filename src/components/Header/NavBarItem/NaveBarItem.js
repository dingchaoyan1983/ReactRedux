import React, { PropTypes } from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';

export class NaveBarItem extends React.Component {
  static contextTypes = {
    store: PropTypes.object
  }

  render () {
    return (
      <li className={classnames('nav-bar-item-container')}>
        <Link to={this.props.href} className={classnames('nav-bar-item')} activeClassName={classnames('nav-bar-item-acitve')}>{this.props.title}</Link>
      </li>
    );
  }
}

export default NaveBarItem
