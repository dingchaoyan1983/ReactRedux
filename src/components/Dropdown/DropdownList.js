import React from 'react';
import DropdownItem from './DropdownItem';

export class DropdownList extends React.Component {

  render () {
    let {selected, onSelect, options} = this.props;
    return (
      <div className="expanded-content arrow-up">
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
