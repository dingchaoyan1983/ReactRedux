import React from 'react';
import DropdownItem from './DropdownItem';
import classnames from 'classnames';
import css from './drop-down-list.scss';

export class DropdownList extends React.Component {

  render () {
    let {selected, onSelect, options} = this.props;
    return (
      <div className={classnames(css.expandedContent, css.arrowUp)}>
        {
          options.map((option) => {
            return React.createElement(this.props.dropdownOptionComponent, {key: option.key, selected, option, onSelect: onSelect.bind(null, option)});
          })
        }
      </div>
    )
  }
}

export default DropdownList
