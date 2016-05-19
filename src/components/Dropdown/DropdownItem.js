import React from 'react';
import classnames from 'classnames';

export class DropdownItem extends React.Component {

  render () {
    let {option, selected, onSelect} = this.props;

    return (
      <div className={classnames('select-option', selected === option.key ? 'active':'')} onClick={onSelect}>
        <a>{option.value}</a>
      </div>
    )
  }
}

export default DropdownItem
