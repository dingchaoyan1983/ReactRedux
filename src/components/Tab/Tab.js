import React from 'react';
import classnames from 'classnames';

export class Tab extends React.Component {
  constructor(props, context) {
    super(props, context);
    let {tabs, initSelected} = props;

    if (!tabs.some(function({name}) {
      return name === initSelected;
    }) && tabs.length) {
      initSelected = tabs[0].name;
    }

    this.state = {selected: initSelected};
  }

  render () {
    let {tabs, initSelected, ...rest} = this.props;
    let {selected} = this.state;
    let {contentComponent} = tabs.find(function({name}) {
      return name === selected;
    });
    contentComponent = contentComponent || 'div';
    let children = tabs.map(function({name}, index) {
      return <li className={classnames('tabs__list__item')} key={index} onClick={this.onSelect.bind(this, name)}>
                <a className={classnames('tabs__title', selected === name ? 'tabs__title--active' : '')}>
                  {name}
                </a>
             </li>
    }, this);

    return (
      <div>
        <ul className={classnames('tabs__list')}>
          {children}
        </ul>
        <div>
          {React.createElement(contentComponent, {rest})}
        </div>
      </div>
    );
  }

  onSelect(name) {
    this.setState({
      selected: name
    });
  }
}

Tab.defaultProps = {
  tabs: [],
  initSelected: ''
}

Tab.contextTypes = {

}

Tab.propTypes = {

}

export default Tab
