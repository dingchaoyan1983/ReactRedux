import React from 'react'
import Header from 'components/Header'
import classnames from 'classnames';
import css from './core-layout.scss';

export const CoreLayout = ({ children }) => (
  <div className={classnames(css.application)}>
    <Header title="Students Distributions"/>
    {children}
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
