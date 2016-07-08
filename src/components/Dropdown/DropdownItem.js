import React from 'react';
import classnames from 'classnames';
import css from './drop-down-item.css';

export class DropdownItem extends React.Component {

  render () {
    let {option, selected, onSelect} = this.props;

    return (
      <div className={classnames(css.selectOption, selected === option.key ? css.active : '')} onClick={onSelect}>
        <a>{option.value}</a>
      </div>
    )
  }
}

export default DropdownItem
