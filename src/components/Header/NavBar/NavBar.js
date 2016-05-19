import React from 'react'
import classnames from 'classnames';

export class NavBar extends React.Component {
  render () {
    return (
      <div className={classnames('nav-bar')}>
        <div className={classnames('nav-bar-module')}>
          <span className="nav-bar-module__icon icon-platform-nav"></span>
          <h3 className={classnames('nav-bar-module__name')}>Students relations</h3>
        </div>
        <nav className={classnames('nav-bar-links')}>
          <ul className={classnames('nav-bar-links__list')}>
            {this.props.children}
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
