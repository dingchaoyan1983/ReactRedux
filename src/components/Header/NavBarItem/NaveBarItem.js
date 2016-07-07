import React, { PropTypes } from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';
import css from './nav-bar-item.scss';

export class NaveBarItem extends React.Component {
  static contextTypes = {
    store: PropTypes.object
  }

  render () {
    return (
      <li className={classnames(css.container)}>
        <Link to={this.props.href} className={classnames(css.item)} activeClassName={classnames(css.acitve)}>{this.props.title}</Link>
      </li>
    );
  }
}

export default NaveBarItem
