import React from 'react'
import Header from 'components/Header'
import classnames from 'classnames';

export const CoreLayout = ({ children }) => (
  <div className={classnames('application')}>
    <Header title="Students Distributions"/>
    {children}
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
