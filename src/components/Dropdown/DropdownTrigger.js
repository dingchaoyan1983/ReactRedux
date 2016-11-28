import React from 'react';
import classnames from 'classnames';
import css from './drop-down-trigger.css';

class DropdownTrigger extends React.Component {
  static defaultProps = {
    option: {},
    expanded: false
  };

  render () {
    let {onClick, option, expanded} = this.props;
    return (
      <button className={css.trigger} onClick={onClick}>
        <h2 className={classnames(css.title, expanded ? css.expanded : '')}>
          {option.value}
        </h2>
      </button>
    )
  }
}

export default DropdownTrigger
