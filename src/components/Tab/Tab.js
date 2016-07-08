import React from 'react';
import classnames from 'classnames';
import css from './tab.css'

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
    this.changeTabSpecifiedVariables = this.changeTabSpecifiedVariables.bind(this);
  }

  get selectedTabObj() {
    return this.props.tabs.find(item => this.state.selected === item.name);
  }

  render () {
    const {tabs, initSelected, ...rest} = this.props;
    const {selected} = this.state;
    let {name, contentComponent, ...tabRest} = tabs.find(function({name}) {
      return name === selected;
    });

    let changeTabSpecifiedVariables = this.changeTabSpecifiedVariables;

    contentComponent = contentComponent || 'div';
    const children = tabs.map(function({name}, index) {
      return <li className={classnames(css.item)} key={index} onClick={this.onSelect.bind(this, name)}>
                <a className={classnames(css.title, selected === name ? css.active : '')}>
                  {name}
                </a>
             </li>
    }, this);

    return (
      <div>
        <ul className={classnames(css.list)}>
          {children}
        </ul>
        <div>
          {React.createElement(contentComponent, {changeTabSpecifiedVariables, ...Object.assign({}, rest, tabRest)})}
        </div>
      </div>
    );
  }

  onSelect(name) {
    this.setState({
      selected: name
    }, ()=> {
      if(this.props.onSelect) {
        this.props.onSelect(name);
      }
    });
  }

  changeTabSpecifiedVariables(obj) {
    delete obj.name;
    delete obj.contentComponent;

    Object.assign(this.selectedTabObj, obj);
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
