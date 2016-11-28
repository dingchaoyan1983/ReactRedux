import React from 'react';
import DropdownTrigger from './DropdownTrigger';
import DropdownList from './DropdownList';
import DropdownItem from './DropdownItem';
import dropdownManager from './DropdownManager';
import css from './drop-down.css';

class Dropdown extends React.Component {
  static defaultProps = {
    options: [],
    initSelected: 0,
    dropdownTriggerComponent: DropdownTrigger,
    dropdownOptionComponent: DropdownItem
  };

  constructor(props, context) {
    super(props, context);
    this.state = {expanded: false, selected: props.initSelected};
    this.toggle = this.toggle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  render () {
    let { expanded,  selected} = this.state;
    let {dropdownTriggerComponent, dropdownOptionComponent, options} = this.props;

    return (
      <div className={css.container} onClick={(e) => {
        e.stopPropagation();
        dropdownManager.close(this);
      }}>
        {
          React.createElement(dropdownTriggerComponent, {expanded, option: this.getOptionByKey(selected), onClick:this.toggle})
        }
        {
          expanded ? <DropdownList {... {options, selected, dropdownOptionComponent}} onSelect={this.onSelect}/> : null
        }
      </div>
    )
  }

  toggle() {
    let {expanded} = this.state;
    this.setState({
      expanded: !expanded
    })
  }

  onSelect(option) {
    this.setState({
      selected: option.key
    });
    this.toggle();
    this.props.onSelect(option.key);
  }

  getOptionByKey(key) {
    return this.props.options.find((option) => option.key === key);
  }

  componentDidMount() {
    dropdownManager.registerDropdown(this);
  }

  componentWillUnmount() {
    dropdownManager.unregisterDropdown(this);
  }
}

export default Dropdown
