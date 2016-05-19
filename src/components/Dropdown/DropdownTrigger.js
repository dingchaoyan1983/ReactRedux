import React from 'react';
import classnames from 'classnames';

export class DropdownTrigger extends React.Component {
  render () {
    let {onClick, option, expanded} = this.props;
    return (
      <button className="dropdown-trigger" onClick={onClick}>
        <h2 className={classnames('dropdown-trigger__title', expanded ? 'dropdown-trigger__title--expanded' : '')}>
          {option.value}
        </h2>
      </button>
    )
  }
}

DropdownTrigger.defaultProps = {
  option: {},
  expanded: false
};


export default DropdownTrigger
