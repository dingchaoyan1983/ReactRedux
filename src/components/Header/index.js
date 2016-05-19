import React from 'react'
import { IndexLink, Link } from 'react-router'
import classnames from 'classnames';
import NavBar from './NavBar';
import NavBarItem from './NavBarItem';
import Title from './Title';

export class Header extends React.Component {
  render () {
    let { title } = this.props;
    return (
      <div>
        <Title title={title}/>
        <NavBar>
          <NavBarItem title="Overview" href="/memberships/overview"/>
          <NavBarItem title="Students" href="/memberships/people"/>
          <NavBarItem title="Maps" href="/memberships/maps"/>
        </NavBar>
      </div>
    );
  }
}

export default Header;
