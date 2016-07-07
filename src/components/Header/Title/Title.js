import React from 'react';
import classnames from 'classnames';
import css from './title.scss';

export class Title extends React.Component {
  render () {
    let { title } = this.props;

    return (
      <div className={classnames(css.container)}><a className={css.logout} href="/logout">Logout</a>
        <div className={classnames(css.text)}>{title}</div>
      </div>
    );
  }
}

export default Title
