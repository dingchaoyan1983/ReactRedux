import React from 'react'
import classnames from 'classnames';
import css from './nav-bar.scss';

export class NavBar extends React.Component {
  render () {
    return (
      <div className={classnames(css.container)}>
        <div className={classnames(css.module)}>
          <span className={classnames(css.icon), 'icon-platform-nav'}></span>
          <h3 className={classnames(css.name)}>Students relations</h3>
        </div>
        <nav className={classnames(css.links)}>
          <ul className={classnames(css.linkList)}>
            {this.props.children}
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
