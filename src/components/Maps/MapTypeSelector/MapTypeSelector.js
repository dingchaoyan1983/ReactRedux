import React from 'react';
import Dropdown from 'components/Dropdown';

class MapTypeSelector extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.options = [
      { value: 'Current Students', key: 'current' },
      { value: 'Current teachers', key: 'renewal' },
      { value: 'Schools', key: 'prospective' }
    ];
    this.initSelected = this.options[0].key;

    this.onSelect = this.onSelect.bind(this);
  }

  render () {
    return (
      <Dropdown options= {this.options} onSelect={this.onSelect} initSelected={this.options[0].key}/>
    )
  }

  onSelect(selected) {
    this.props.fetchMapData(selected);
  }

  componentDidMount() {
    this.props.fetchMapData(this.initSelected);
  }
}

MapTypeSelector.defaultProps = {

}

MapTypeSelector.contextTypes = {

}

MapTypeSelector.propTypes = {

}

export default MapTypeSelector
