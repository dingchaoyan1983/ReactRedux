import React from 'react';
import classnames from 'classnames';

export class Title extends React.Component {
  render () {
    let { title } = this.props;

    return (
      <div className={classnames('title-bar')}><a className={'logout'} href="/logout">Logout</a>
        <div className={classnames('title-text')}>{title}</div>
      </div>
    );
  }
}

export default Title
